import { getAutoColors } from "../theme"
import PressableComponent from "../components/pressable.component"
import TextComponent from "../components/text.component"
import { View, SafeAreaView, useColorScheme, Text } from "react-native"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux/store.redux"
import { useTranslation } from "react-i18next"
import ColorPickerModal from "../modals/colorPicker.modal"
import PickerSelect from "react-native-picker-select"
import useApp from "../hooks/app.hook"
import languages from "../assets/data/languages.data"
import fonts from "../assets/data/fonts.data"

const ProfileScreen = () => {

  const { t } = useTranslation()
  const colorMode = useColorScheme()
  const autoColors = getAutoColors()
  const { clearLocalStorage } = useApp()
  const appStates = useSelector((state:RootState)=>state.app)
  const dispatch = useDispatch<AppDispatch>()
  const pickerSelect1Ref = useRef<PickerSelect | null>(null)
  const pickerSelect2Ref = useRef<PickerSelect | null>(null)

  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false)
  const [selectedBrand, setSelectedBrand] = useState("brand1")

  const [brandColors, setBrandColors] = useState({
    brand1: appStates.foundations.brand1,
    brand2: appStates.foundations.brand2,
    brand3: appStates.foundations.brand3,
  }) 
  const [fontFamily, setFontFamily] = useState(appStates.foundations.fontFamily)
  const [language, setLanguage] = useState(appStates.language)

  useEffect(()=>{
    setBrandColors({
      brand1: appStates.foundations.brand1,
      brand2: appStates.foundations.brand2,
      brand3: appStates.foundations.brand3,
    })
  },[isColorPickerVisible, appStates])

  useEffect(()=>{
    setFontFamily(appStates.foundations.fontFamily)
    setLanguage(appStates.language)
  },[appStates])

  const saveChanges = () => {
    if(selectedBrand === "brand1"){
      dispatch({type: "app/changeBrand1", payload: brandColors.brand1})
    } else if (selectedBrand === "brand2"){
      dispatch({type: "app/changeBrand2", payload: brandColors.brand2})
    } else if (selectedBrand === "brand3"){
      dispatch({type: "app/changeBrand3", payload: brandColors.brand3})
    }
    setIsColorPickerVisible(false)
  }
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: autoColors.bg2}}>

      <ColorPickerModal
        isColorPickerVisible={isColorPickerVisible}
        setIsColorPickerVisible={setIsColorPickerVisible}
        selectedBrand={selectedBrand}
        brandColors={brandColors}
        setBrandColors={setBrandColors}
        saveChanges={saveChanges}
      />

      <View style={{paddingHorizontal: 15}}>
        {
          Object.keys(brandColors).map((brand:string, i:number) => (
            <PressableComponent 
              key={i} 
              onPress={()=>{
                setSelectedBrand(brand)
                setIsColorPickerVisible(true)
              }} 
              style={{flexDirection: "row", gap: 5, marginBottom: 5, backgroundColor: autoColors.bg1, borderWidth: 1, borderColor: autoColors.border1, height: 50, borderRadius: 15, justifyContent: "center", alignItems: "center"}}
            >
              <TextComponent style={{fontSize: 16}}>brand{i+1}:</TextComponent>
              <TextComponent style={{fontSize: 16, fontWeight: 800}}>{brandColors[brand as keyof typeof brandColors]}</TextComponent>
            </PressableComponent>
          ))
        }
        
        <View>
          <PressableComponent
            onPress={()=>pickerSelect1Ref?.current?.togglePicker()}
            style={{flexDirection: "row", gap: 5, marginBottom: 5, backgroundColor: autoColors.bg1, borderWidth: 1, borderColor: autoColors.border1, height: 50, borderRadius: 15, justifyContent: "center", alignItems: "center"}}
          >
            <TextComponent style={{fontSize: 16, fontFamily: fontFamily}}>Font Family: {fontFamily}</TextComponent>
          </PressableComponent>
          <PickerSelect
              ref={pickerSelect1Ref}
              value={fontFamily}
              onValueChange={(value)=>setFontFamily(value)}
              onDonePress={()=>dispatch({type: "app/changeFontFamily", payload: fontFamily})}
              items={fonts.map((font)=>({label: font.name, value: font.name}))}
              darkTheme={colorMode === "dark"}
            ><></></PickerSelect>
        </View>

        <View>
          <PressableComponent
            onPress={()=>pickerSelect2Ref?.current?.togglePicker()}
            style={{flexDirection: "row", gap: 5, marginBottom: 5, backgroundColor: autoColors.bg1, borderWidth: 1, borderColor: autoColors.border1, height: 50, borderRadius: 15, justifyContent: "center", alignItems: "center"}}
          >
            <TextComponent style={{fontSize: 16}}>{t("screens.profile.language")}: {languages.find(languagesLanguage=>languagesLanguage.code === language)?.name}</TextComponent>
          </PressableComponent>
          <PickerSelect
              ref={pickerSelect2Ref}
              value={language}
              onValueChange={(value)=>setLanguage(value)}
              onDonePress={()=>dispatch({type: "app/changeLanguage", payload: language})}
              items={languages.map((language)=>({label: language.name, value: language.code}))}
              darkTheme={colorMode === "dark"}
            ><></></PickerSelect>
        </View>
        
        <PressableComponent
          onPress={()=>dispatch({type: "app/resetPreferences"})}
          style={{flexDirection: "row", gap: 5, marginBottom: 5, backgroundColor: autoColors.bg1, borderWidth: 1, borderColor: autoColors.border1, height: 50, borderRadius: 15, justifyContent: "center", alignItems: "center"}}
        >
          <TextComponent style={{fontSize: 16, color: autoColors.text1}}>
            {
              t("screens.profile.resetPreferences")
            }
          </TextComponent>
        </PressableComponent>

        <PressableComponent
          onPress={()=>clearLocalStorage()}
          style={{flexDirection: "row", gap: 5, marginBottom: 5, backgroundColor: autoColors.bg1, borderWidth: 1, borderColor: autoColors.border1, height: 50, borderRadius: 15, justifyContent: "center", alignItems: "center"}}
        >
          <TextComponent style={{fontSize: 16, color: autoColors.text1}}>
            Clear Local Storage
          </TextComponent>
        </PressableComponent>
      </View>
      
    </SafeAreaView>
  )
}

export default ProfileScreen