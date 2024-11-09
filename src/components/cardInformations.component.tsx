import { View } from "react-native"
import TextComponent from "./text.component"
import PressableComponent from "./pressable.component"
import CardNumberIcon from "./assets/icons/cardNumber.icon"
import CopyIcon from "./assets/icons/copy.icon"
import CardDateIcon from "./assets/icons/cardDate.icon"
import CardSecurityNumberIcon from "./assets/icons/cardSecurityNumber.icon"
import { getAutoColors } from "../theme"
import { useTranslation } from "react-i18next"
import CardInformationsType, { CardInformationType } from "../type/cardInformations.type"

interface Props {
  data: CardInformationsType
  copyToClipboard: (name: keyof CardInformationsType, value: CardInformationType["value"]) => void
}

const CardInformationsComponent = (props:Props) => {

  const { t } = useTranslation()
  const autoColors = getAutoColors()
  
  return (
    <View style={{marginTop: 20, paddingHorizontal: 15}}>
      <TextComponent style={{fontSize: 17, fontWeight: 500, marginBottom: 5, color: autoColors.text1}}>{t("screens.cards.cardInformations")}</TextComponent>
      
      <View style={{backgroundColor: autoColors.bg1, borderWidth: 1, borderColor: autoColors.border1, borderRadius: 10}}>
        
        <View style={{flexDirection: "row", alignItems: "center", gap: 10, borderBottomWidth: 1, borderColor: autoColors.border1, paddingVertical: 10, paddingHorizontal: 12.5}}>
          <View style={{padding: 10, backgroundColor: autoColors.bg2, borderRadius: 50}}>
            <CardNumberIcon color={autoColors.brand1}/>
          </View>
          <TextComponent style={{color: autoColors.text1, fontSize: 14}} children={props.data.cardNumber.value}/>
          <PressableComponent 
            style={{padding: 5}}
            onPress={()=>props.copyToClipboard("cardNumber", props.data.cardNumber.value)}
          >
            {
              <CopyIcon color={props.data.cardNumber.icon === "clipboard" ? "" : "green"}/>
            }
          </PressableComponent>
        </View>
        
        <View style={{flexDirection: "row", alignItems: "center", gap: 12.5, paddingVertical: 10, paddingHorizontal: 12.5}}>
          <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
            <View style={{padding: 10, backgroundColor: autoColors.bg2, borderRadius: 50}}>
              <CardDateIcon color={autoColors.brand1}/>
            </View>
            <TextComponent style={{color: autoColors.text1, fontSize: 14}} children={props.data.cardDate.value}/>
            <PressableComponent 
              style={{padding: 5}}
              onPress={()=>props.copyToClipboard("cardDate", props.data.cardDate.value)}
            >
              {
                <CopyIcon color={props.data.cardDate.icon === "clipboard" ? "" : "green"}/>
              }
            </PressableComponent>
          </View>

          <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
            <View style={{padding: 10, backgroundColor: autoColors.bg2, borderRadius: 50}}>
              <CardSecurityNumberIcon color={autoColors.brand1}/>
            </View>
            <TextComponent style={{color: autoColors.text1, fontSize: 14}} children={props.data.cardSecurityNumber.value}/>
            <PressableComponent 
              style={{padding: 5}}
              onPress={()=>props.copyToClipboard("cardSecurityNumber", props.data.cardSecurityNumber.value)}
            >
              {
                <CopyIcon color={props.data.cardSecurityNumber.icon === "clipboard" ? "" : "green"}/>
              }
            </PressableComponent>
          </View>
        </View>

      </View>
    </View>
  )
}

export default CardInformationsComponent