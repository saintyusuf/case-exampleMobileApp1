import { SafeAreaView } from "react-native-safe-area-context"
import { getAutoColors } from "../theme"
import PressableComponent from "../components/pressable.component"
import useApp from "../hooks/app.hook"
import TextComponent from "../components/text.component"

const ProfileScreen = () => {

  const autoColors = getAutoColors()
  const { clearLocalStorage } = useApp()
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: autoColors.bg2}}>

      <PressableComponent
        onPress={()=>clearLocalStorage()}
        style={{height: 50, justifyContent: "center", alignItems: "center", margin: 10, borderRadius: 10, backgroundColor: autoColors.bg1, borderWidth: 1, borderColor: autoColors.border1}}
      >
        <TextComponent style={{fontSize: 16, color: autoColors.text1}}>Clear Local Storage</TextComponent>
      </PressableComponent>
    </SafeAreaView>
  )
}

export default ProfileScreen