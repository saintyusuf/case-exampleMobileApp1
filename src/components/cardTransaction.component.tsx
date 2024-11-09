import { View, ViewProps } from "react-native"
import TextComponent from "./text.component"
import CardNumberIcon from "./assets/icons/cardNumber.icon"
import { getAutoColors } from "../theme"
import CardTransactionType from "../type/cardTransaction.type"

interface Props {
  data: CardTransactionType
  style?: ViewProps["style"]
}

const CardTransactionComponent = (props:Props) => {

  const autoColors = getAutoColors()
  
  return (
    <View style={[{flexDirection: "row", alignItems: "center", borderColor: autoColors.border2, padding: 10}, props.style]}>
      <View style={{padding: 10, backgroundColor: autoColors.bg2, borderRadius: 50}}>
        <CardNumberIcon color={autoColors.brand1}/>
      </View>
      <View style={{flex: 1, marginLeft: 10}}>
        <TextComponent style={{color: autoColors.text1, fontSize: 14, marginBottom: 5}}>{props.data.name}</TextComponent>
        <TextComponent style={{color: autoColors.text2, fontSize: 12}}>{props.data.date}</TextComponent>
      </View>
      <View style={{flexDirection: "row", alignItems: "baseline"}}>
        <TextComponent style={{color: autoColors.text1, fontSize: 14}}>-{props.data.price.split(",")[0]}</TextComponent>
        <TextComponent style={{color: autoColors.text1, fontSize: 10}}>,{props.data.price.split(",")[1]}</TextComponent>
      </View>
    </View>
  )
}

export default CardTransactionComponent