import { Modal, View, SafeAreaView } from "react-native"
import PressableComponent from "../components/pressable.component"
import TextComponent from "../components/text.component"
import ColorPicker, { HueSlider, Panel1 } from "reanimated-color-picker"
import { useTranslation } from "react-i18next"
import { getAutoColors } from "../theme"

interface Props {
  isColorPickerVisible: boolean
  setIsColorPickerVisible: (val:boolean) => void
  selectedBrand: string
  brandColors: {
    brand1: string
    brand2: string
    brand3: string
  }
  setBrandColors: (val:{brand1:string, brand2:string, brand3:string}) => void
  saveChanges: () => void
}

const ColorPickerModal = (props:Props) => {

  const { t } = useTranslation()
  const autoColors = getAutoColors()
  
  return (
    <Modal visible={props.isColorPickerVisible} style={{position: "relative", justifyContent: "center", alignItems: "center"}} animationType="slide" transparent={true}>
      <SafeAreaView style={{backgroundColor: autoColors.bg2}}>
        <View style={{flexDirection: "column", paddingHorizontal: 20}}>
          <PressableComponent onPress={()=>props.setIsColorPickerVisible(false)} styleOutside={{width: 50, height: 50, justifyContent: "center", alignItems: "center"}}>
            <TextComponent>Close</TextComponent>
          </PressableComponent>
          <ColorPicker value={props.brandColors[props.selectedBrand as keyof typeof props.brandColors]} onChange={(val)=>props.setBrandColors({...props.brandColors, [props.selectedBrand]: val.hex})} style={{marginBottom: 10}}>
            <Panel1 thumbSize={35} style={{marginBottom: 10}}/>
            <HueSlider thumbSize={40} sliderThickness={30}/>
          </ColorPicker>
          <View style={{flexDirection: "row", gap: 5, height: 50, justifyContent: "center", alignItems: "center"}}>
            <TextComponent style={{fontSize: 16}}>{props.selectedBrand}: {props.brandColors[props.selectedBrand as keyof typeof props.brandColors]}</TextComponent>
          </View>
          <PressableComponent pressableVariant="default" onPress={()=>props.saveChanges()}>
            <TextComponent>
              {
                t("modals.colorPicker.save")
              }
            </TextComponent>
          </PressableComponent>
        </View>
      </SafeAreaView>
    </Modal>
  )
}

export default ColorPickerModal