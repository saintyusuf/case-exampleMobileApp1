import { NavigationContainer } from "@react-navigation/native"
import ScreensNavigation from "./screens.navigation"

const NavigationProvider = () => { 
  return (
    <NavigationContainer>
      <ScreensNavigation/>
    </NavigationContainer>
  )
}

export default NavigationProvider