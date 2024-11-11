import { getAutoColors } from "../theme"
import PressableComponent from "../components/pressable.component"
import TextComponent from "../components/text.component"
import { View, SafeAreaView, useColorScheme, Text } from "react-native"
import { useEffect, useRef, useState } from "react"
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
  const { getBrand1, getBrand2, getBrand3, getFontFamily, getLanguage, setBrand1, setBrand2, setBrand3, setFontFamily, setLanguage, resetPreferences, clearLocalStorage } = useApp()
  const pickerSelect1Ref = useRef<PickerSelect | null>(null)
  const pickerSelect2Ref = useRef<PickerSelect | null>(null)

  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false)
  const [selectedBrand, setSelectedBrand] = useState("brand1")

  const [brandColors, setBrandColors] = useState({
    brand1: getBrand1(),
    brand2: getBrand2(),
    brand3: getBrand3(),
  }) 
  const [localFontFamily, setLocalFontFamily] = useState(getFontFamily())
  const [localLanguage, setLocalLanguage] = useState(getLanguage())

  useEffect(()=>{
    setBrandColors({
      brand1: getBrand1(),
      brand2: getBrand2(),
      brand3: getBrand3(),
    })
  },[isColorPickerVisible, getBrand1(), getBrand2(), getBrand3()])

  useEffect(()=>{
    setFontFamily(getFontFamily())
    setLanguage(getLanguage())
  },[getFontFamily(), getLanguage()])

  const saveChanges = () => {
    if(selectedBrand === "brand1"){
      setBrand1(brandColors.brand1)
    } else if (selectedBrand === "brand2"){
      setBrand2(brandColors.brand2)
    } else if (selectedBrand === "brand3"){
      setBrand3(brandColors.brand3)
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
              <TextComponent style={{fontSize: 16}}>brand{i+1}: {brandColors[brand as keyof typeof brandColors]}</TextComponent>
            </PressableComponent>
          ))
        }
        
        <View>
          <PressableComponent
            onPress={()=>pickerSelect1Ref?.current?.togglePicker()}
            style={{flexDirection: "row", gap: 5, marginBottom: 5, backgroundColor: autoColors.bg1, borderWidth: 1, borderColor: autoColors.border1, height: 50, borderRadius: 15, justifyContent: "center", alignItems: "center"}}
          >
            <TextComponent style={{fontSize: 16, fontFamily: localFontFamily}}>Font Family: {localFontFamily}</TextComponent>
          </PressableComponent>
          <PickerSelect
              ref={pickerSelect1Ref}
              value={localFontFamily}
              onValueChange={(value)=>setLocalFontFamily(value)}
              onDonePress={()=>setFontFamily(localFontFamily)}
              items={fonts.map((font)=>({label: font.name, value: font.name}))}
              darkTheme={colorMode === "dark"}
            ><></></PickerSelect>
        </View>

        <View>
          <PressableComponent
            onPress={()=>pickerSelect2Ref?.current?.togglePicker()}
            style={{flexDirection: "row", gap: 5, marginBottom: 5, backgroundColor: autoColors.bg1, borderWidth: 1, borderColor: autoColors.border1, height: 50, borderRadius: 15, justifyContent: "center", alignItems: "center"}}
          >
            <TextComponent style={{fontSize: 16}}>{t("screens.profile.language")}: {languages.find(languagesLanguage=>languagesLanguage.code === localLanguage)?.name}</TextComponent>
          </PressableComponent>
          <PickerSelect
              ref={pickerSelect2Ref}
              value={localLanguage}
              onValueChange={(value)=>setLocalLanguage(value)}
              onDonePress={()=>setLanguage(localLanguage)}
              items={languages.map((language)=>({label: language.name, value: language.code}))}
              darkTheme={colorMode === "dark"}
            ><></></PickerSelect>
        </View>
        
        <PressableComponent
          onPress={()=>resetPreferences()}
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
            {
              t("screens.profile.clearLocalStorage")
            }
          </TextComponent>
        </PressableComponent>
      </View>
      
    </SafeAreaView>
  )
}

export default ProfileScreen