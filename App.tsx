import I18NProvider from "./src/i18n/provider.i18n"
import NavigationProvider from "./src/navigation/provider.navigation"
import ReduxProvider from "./src/redux/provider.redux"

function App() {  
  return (
    <ReduxProvider>
      <I18NProvider>
        <NavigationProvider/>
      </I18NProvider>
    </ReduxProvider>
  )
}

export default App
