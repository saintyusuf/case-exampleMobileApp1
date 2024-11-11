import { Alert } from "react-native"
import { AppDispatch, persistor, RootState } from "../redux/store.redux"
import RNRestart from "react-native-restart"
import { useDispatch, useSelector } from "react-redux"

const useApp = () => {

  const appStates = useSelector((state:RootState)=>state.app)
  const dispatch = useDispatch<AppDispatch>()

  const getFontFamily = () => {
    return appStates.foundations.fontFamily
  }
    
  const getBrand1 = () => {
    return appStates.foundations.brand1
  }

  const getBrand2 = () => {
    return appStates.foundations.brand2
  }

  const getBrand3 = () => {
    return appStates.foundations.brand3
  }

  const getLanguage = () => {
    return appStates.language
  }

  const setFontFamily = (fontFamily:string) => {
    dispatch({type: "app/changeFontFamily", payload: fontFamily})
  }

  const setBrand1 = (color:string) => {
    dispatch({type: "app/changeBrand1", payload: color})
  }

  const setBrand2 = (color:string) => {
    dispatch({type: "app/changeBrand2", payload: color})
  }

  const setBrand3 = (color:string) => {
    dispatch({type: "app/changeBrand3", payload: color})
  }

  const setLanguage = (language:string) => {
    dispatch({type: "app/changeLanguage", payload: language})
  }

  const resetPreferences = () => {
    dispatch({type: "app/resetPreferences"})
  }

  const clearLocalStorage = () => {
    Alert.alert("", "App needs to restart after local storage cleared.", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      {
        text: "Clear & Restart",
        onPress: () => {
          persistor.purge().then(()=>{
            RNRestart.Restart()
          })
        }
      }
    ])
  }

  return {
    getFontFamily,
    getBrand1,
    getBrand2,
    getBrand3,
    getLanguage,
    setFontFamily,
    setBrand1,
    setBrand2,
    setBrand3,
    setLanguage,
    resetPreferences,
    clearLocalStorage
  }

}

export default useApp