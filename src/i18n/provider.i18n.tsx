import { I18nextProvider } from "react-i18next"
import i18next from "./config.i18n"

const I18NProvider = ({children}:any) => {
  return (
    <I18nextProvider i18n={i18next}>
      {children}
    </I18nextProvider>
  )
}

export default I18NProvider