import { SafeAreaView } from "react-native"
import { getAutoColors } from "../theme"
import TextComponent from "../components/text.component"

const HomeScreen = () => {

  const autoColors = getAutoColors()
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: autoColors.bg2, justifyContent: "center", alignItems: "center"}}>
      <TextComponent>Home Screen</TextComponent>
    </SafeAreaView>
  )
}

export default HomeScreen