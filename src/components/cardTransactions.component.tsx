import { View, ScrollView } from "react-native"
import TextComponent from "./text.component"
import PressableComponent from "./pressable.component"
import { getAutoColors } from "../theme"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import CardTransactionComponent from "./cardTransaction.component"
import CardTransactionType from "../type/cardTransaction.type"

interface Props {
  data: CardTransactionType[]
}

const CardTransactionsComponent = (props:Props) => {

  const { t } = useTranslation()
  const autoColors = getAutoColors()

  const [isAllTransactionsVisible, setIsAllTransactionsVisible] = useState(false)
  
  return (
    <View style={{marginTop: 15, marginBottom: 20, paddingHorizontal: 15}}>
      <View style={{flexDirection: "row", alignItems: "flex-end", marginBottom: 7.5}}>
        <TextComponent style={{fontSize: 17, fontWeight: 500, marginBottom: 5, color: autoColors.text1}}>{t("screens.cards.cardTransactions")}</TextComponent>
        <PressableComponent pressableVariant="default" styleOutside={{marginLeft: "auto"}} onPress={()=>setIsAllTransactionsVisible(!isAllTransactionsVisible)}>
          <TextComponent style={{color: autoColors.text1, fontSize: 14}}>{t("screens.cards.all")}</TextComponent>
        </PressableComponent>
      </View>

      <View style={{borderWidth: 1, borderColor: autoColors.border1, borderRadius: 10, backgroundColor: autoColors.bg1}}>
        <ScrollView>
        {
          (isAllTransactionsVisible ? props.data : props.data.slice(0, 2)).map((transaction, index) => (
            <CardTransactionComponent key={index} data={transaction} style={{borderBottomWidth: (isAllTransactionsVisible ? props.data.length : 2) - 1 !== index ? 1 : 0}}/>
          ))
        }
        </ScrollView>
      </View>
    </View>
  )
}

export default CardTransactionsComponent