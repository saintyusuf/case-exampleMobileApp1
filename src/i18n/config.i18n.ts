import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import { getLocales } from "react-native-localize"

// LANGUAGE FILES
import en from "./locales/en.i18n.json"
import tr from "./locales/tr.i18n.json"

const resources = {
  en: { translation: en },
  tr: { translation: tr },
}

i18next
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v3",
    lng: getLocales()[0].languageCode,
    fallbackLng: "tr",
    resources,
  })

export default i18next