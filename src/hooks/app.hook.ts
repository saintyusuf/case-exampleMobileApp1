import { Alert } from "react-native"
import { persistor } from "../redux/store.redux"
import RNRestart from "react-native-restart"

const useApp = () => {

  const clearLocalStorage = () => {
    Alert.alert("", "App needs to restart after local storage cleaned?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      {
        text: "OK",
        onPress: () => {
          persistor.purge().then(()=>{
            RNRestart.Restart()
          })
        }
      }
    ])
  }

  return {
    clearLocalStorage
  }

}

export default useApp