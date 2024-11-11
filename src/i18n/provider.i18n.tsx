import { I18nextProvider } from "react-i18next"
import i18next from "./config.i18n"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store.redux"

const I18NProvider = ({children}:any) => {

  const appStates = useSelector((state:RootState)=>state.app)
  
  useEffect(()=>{
    i18next.changeLanguage(appStates.language)
  },[i18next, appStates])
  
  return (
    <I18nextProvider i18n={i18next}>
      {children}
    </I18nextProvider>
  )
}

export default I18NProvider