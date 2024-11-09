import { View, ScrollView } from "react-native"
import TextComponent from "./text.component"
import PressableComponent from "./pressable.component"
import { getAutoColors } from "../theme"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import CardTransactionComponent from "./cardTransaction.component"


const CardTransactionsComponent = () => {

  const { t } = useTranslation()
  const autoColors = getAutoColors()

  const [isAllTransactionsVisible, setIsAllTransactionsVisible] = useState(false)
  const [cardTransactions, setTransactions] = useState<{
    category: string,
    name: string,
    date: string,
    price: string
  }[]>([
    {
      category: "clothing",
      name: "LC Waikiki Mağazacılık Hizmetleri",
      date: "30.03.2024",
      price: "1304,43₺",
    },
    {
      category: "food",
      name: "Happy Moon's Grup",
      date: "13.03.2024",
      price: "310,00₺",
    },
    {
      category: "clothing",
      name: "LC Waikiki Mağazacılık Hizmetleri",
      date: "30.03.2024",
      price: "1304,43₺",
    },
    {
      category: "food",
      name: "Happy Moon's Grup",
      date: "13.03.2024",
      price: "310,00₺",
    },
    {
      category: "clothing",
      name: "LC Waikiki Mağazacılık Hizmetleri",
      date: "30.03.2024",
      price: "1304,43₺",
    },
    {
      category: "food",
      name: "Happy Moon's Grup",
      date: "13.03.2024",
      price: "310,00₺",
    }
  ])
  
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
          (isAllTransactionsVisible ? cardTransactions : cardTransactions.slice(0, 2)).map((transaction, index) => (
            <CardTransactionComponent key={index} data={transaction} style={{borderBottomWidth: (isAllTransactionsVisible ? cardTransactions.length : 2) - 1 !== index ? 1 : 0}}/>
          ))
        }
        </ScrollView>
      </View>
    </View>
  )
}

export default CardTransactionsComponent