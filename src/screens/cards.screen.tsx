import { useEffect, useState } from "react"
import { FlatList, Image, ScrollView, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { baseColors, getAutoColors } from "../theme"
import { useTranslation } from "react-i18next"
import TextComponent from "../components/text.component"
import CardBackground from "../components/assets/backgrounds/card.background"
import PressableComponent from "../components/pressable.component"
import QrIcon from "../components/assets/icons/qr.icon"
import DepositIcon from "../components/assets/icons/deposit.icon"
import CardNumberIcon from "../components/assets/icons/cardNumber.icon"
import CardDateIcon from "../components/assets/icons/cardDate.icon"
import CardSecurityNumberIcon from "../components/assets/icons/cardSecurityNumber.icon"
import CopyIcon from "../components/assets/icons/copy.icon"
import Clipboard from "@react-native-clipboard/clipboard"
import hapticFunction from "../functions/haptic.function"
import CardTransactionsComponent from "../components/cardTransactions.component"

const CardsScreen = () => {

  const { t } = useTranslation()
  const autoColors = getAutoColors()

  // CARD INFORMATIONS
  const [cardInformations, setInformations] = useState<{
    [key: string]: {value: string, icon: "clipboard" | "success"}
  }>({
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
  const copyToClipboard = (name:string, value:string) => {
    Clipboard.setString(value)
    hapticFunction("success")
    setInformations(prevState => {
      const updatedState = { ...prevState }
      Object.keys(updatedState).forEach(key => {
        updatedState[key].icon = "clipboard"
      }),
      updatedState[name].icon = "success"
      return updatedState
    })
  }

  // reset icons after 1 second
  useEffect(()=>{
    const resetIcons = setTimeout(()=>{
      setInformations(prevState => {
        const updatedState = { ...prevState }
        Object.keys(updatedState).forEach(key => {
          updatedState[key].icon = "clipboard"
        });
        return updatedState
      });
    }, 500)
    return () => clearTimeout(resetIcons)
  },[cardInformations])

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

          <View style={{marginTop: 20, paddingHorizontal: 15}}>
            <TextComponent style={{fontSize: 17, fontWeight: 500, marginBottom: 5, color: autoColors.text1}}>{t("screens.cards.cardInformations")}</TextComponent>
            
            <View style={{backgroundColor: autoColors.bg1, borderWidth: 1, borderColor: autoColors.border1, borderRadius: 10}}>
              
              <View style={{flexDirection: "row", alignItems: "center", gap: 10, borderBottomWidth: 1, borderColor: autoColors.border1, paddingVertical: 10, paddingHorizontal: 12.5}}>
                <View style={{padding: 10, backgroundColor: autoColors.bg2, borderRadius: 50}}>
                  <CardNumberIcon color={autoColors.brand1}/>
                </View>
                <TextComponent style={{color: autoColors.text1, fontSize: 14}} children={cardInformations.cardNumber.value}/>
                <PressableComponent 
                  style={{padding: 5}}
                  onPress={()=>copyToClipboard("cardNumber", cardInformations.cardNumber.value)}
                >
                  {
                    <CopyIcon color={cardInformations.cardNumber.icon === "clipboard" ? "" : "green"}/>
                  }
                </PressableComponent>
              </View>
              
              <View style={{flexDirection: "row", alignItems: "center", gap: 12.5, paddingVertical: 10, paddingHorizontal: 12.5}}>
                <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
                  <View style={{padding: 10, backgroundColor: autoColors.bg2, borderRadius: 50}}>
                    <CardDateIcon color={autoColors.brand1}/>
                  </View>
                  <TextComponent style={{color: autoColors.text1, fontSize: 14}} children={cardInformations.cardDate.value}/>
                  <PressableComponent 
                    style={{padding: 5}}
                    onPress={()=>copyToClipboard("cardDate", cardInformations.cardDate.value)}
                  >
                    {
                      <CopyIcon color={cardInformations.cardDate.icon === "clipboard" ? "" : "green"}/>
                    }
                  </PressableComponent>
                </View>

                <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
                  <View style={{padding: 10, backgroundColor: autoColors.bg2, borderRadius: 50}}>
                    <CardSecurityNumberIcon color={autoColors.brand1}/>
                  </View>
                  <TextComponent style={{color: autoColors.text1, fontSize: 14}} children={cardInformations.cardSecurityNumber.value}/>
                  <PressableComponent 
                    style={{padding: 5}}
                    onPress={()=>copyToClipboard("cardSecurityNumber", cardInformations.cardSecurityNumber.value)}
                  >
                    {
                      <CopyIcon color={cardInformations.cardSecurityNumber.icon === "clipboard" ? "" : "green"}/>
                    }
                  </PressableComponent>
                </View>
              </View>

            </View>
          </View>

          <CardTransactionsComponent/>
        </ScrollView>

    </SafeAreaView>
  )
}

export default CardsScreen