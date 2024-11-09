import { NavigationContainer, Theme, DefaultTheme } from "@react-navigation/native"
import ScreensNavigation from "./screens.navigation"
import { getAutoColors } from "../theme"

const NavigationProvider = () => { 
  return (
    <NavigationContainer>
      <ScreensNavigation/>
    </NavigationContainer>
  )
}

export default NavigationProvider