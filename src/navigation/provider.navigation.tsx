import { NavigationContainer, Theme, DefaultTheme } from "@react-navigation/native"
import ScreensNavigation from "./screens.navigation"
import { autoColors } from "../theme"

const NavigationProvider = () => {

  const colors = autoColors()

  const theme:Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.bg1,
    }
  }
  
  return (
    <NavigationContainer theme={theme}>
      <ScreensNavigation/>
    </NavigationContainer>
  )
}

export default NavigationProvider