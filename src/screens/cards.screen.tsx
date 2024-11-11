import { useEffect, useState } from "react"
import { Image, ScrollView, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { getBaseColors, getAutoColors } from "../theme"
import { useTranslation } from "react-i18next"
import TextComponent from "../components/text.component"
import CardBackground from "../components/assets/backgrounds/card.background"
import PressableComponent from "../components/pressable.component"
import QrIcon from "../components/assets/icons/qr.icon"
import DepositIcon from "../components/assets/icons/deposit.icon"
import Clipboard from "@react-native-clipboard/clipboard"
import hapticFunction from "../functions/haptic.function"
import CardTransactionsComponent from "../components/cardTransactions.component"
import CardInformationsComponent from "../components/cardInformations.component"
import CardTransactionType from "../type/cardTransaction.type"
import CardInformationsType, { CardInformationType } from "../type/cardInformations.type"

const CardsScreen = () => {

  const { t } = useTranslation()
  const autoColors = getAutoColors()
  const baseColors = getBaseColors()

  // CARD INFORMATIONS
  const [cardInformations, setInformations] = useState<CardInformationsType>({
    cardNumber: {
      value: "4310 1030 3000 9530",
      icon: "clipboard",

    },
    cardDate: {
      value: "10/26",
      icon: "clipboard",

    },
    cardSecurityNumber: {
      value: "430",
      icon: "clipboard",

    },
  })

  // add green color to icon to give feedback to user
  const copyToClipboard = (name: keyof CardInformationsType, value: CardInformationType["value"]) => {
    Clipboard.setString(value)
    hapticFunction("success")
    setInformations(prevState => {
      const updatedState = { ...prevState }
      Object.keys(updatedState).map((key) => {
        updatedState[key as unknown as keyof CardInformationsType].icon = "clipboard"
      })
      updatedState[name as unknown as keyof CardInformationsType].icon = "success"
      return updatedState
    })
  }

  // reset icons after 1 second
  useEffect(()=>{
    const resetIcons = setTimeout(()=>{
      setInformations(prevState => {
        const updatedState = { ...prevState }
        Object.keys(updatedState).map((key) => {
          updatedState[key as unknown as keyof CardInformationsType].icon = "clipboard"
        })
        return updatedState
      });
    }, 500)
    return () => clearTimeout(resetIcons)
  },[cardInformations])

  // CARD TRANSACTIONS
  const [cardTransactions, setTransactions] = useState<CardTransactionType[]>([
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
    <SafeAreaView edges={{top: "additive"}} style={{flex: 1, backgroundColor: autoColors.bg2}}>

        <ScrollView style={{flex: 1}}>
          <View style={{overflow: "hidden"}}>
            <TextComponent style={{marginTop: 20, fontSize: 18, textAlign: "center", marginBottom: 55, color: autoColors.text1}}>{t("screens.cards.myCard")}</TextComponent>
            <CardBackground width="100%" height="100%" style={{position: "absolute", left: 0, top: 0, width: "100%", height: "100%"}}/>
            <View style={{justifyContent: "center", margin: "auto"}}>
              <Image source={require("../assets/images/card.png")} style={{width: 228, height: 115, objectFit: "contain"}}/>
              <View style={{position: "absolute", bottom: 15, left: 22.5}}>
                <TextComponent style={{color: baseColors.dmText1, fontSize: 8}}>{t("screens.cards.cardBalance")}</TextComponent>
                <View style={{flexDirection: "row", alignItems: "baseline"}}>
                  <TextComponent style={{color: baseColors.dmText1, fontSize: 22, fontWeight: 600}}>25.320</TextComponent>
                  <TextComponent style={{color: baseColors.dmText1, fontSize: 17, fontWeight: 600}}>,50₺</TextComponent>
                </View>
              </View>
            </View>
          </View>

          <View style={{flexDirection: "row", padding: 15, gap: 10, justifyContent: "center", borderBottomWidth: 1, borderBottomColor: autoColors.border1}}>
            <PressableComponent pressableVariant="primary">
              <QrIcon color={baseColors.dmText1} style={{marginRight: 5}}/>
              <TextComponent style={{fontSize: 15, color: baseColors.dmText1}}>{t("screens.cards.payWithQR")}</TextComponent>
            </PressableComponent>

            <PressableComponent pressableVariant="primary">
              <DepositIcon color={baseColors.dmText1} style={{marginRight: 5}}/>
              <TextComponent style={{fontSize: 15, color: baseColors.dmText1}}>{t("screens.cards.deposit")}</TextComponent>
            </PressableComponent>
          </View>

          <CardInformationsComponent data={cardInformations} copyToClipboard={copyToClipboard}/>
          <CardTransactionsComponent data={cardTransactions}/>
        </ScrollView>

    </SafeAreaView>
  )
}

export default CardsScreen