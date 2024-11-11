import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/home.screen"
import CardsScreen from "../screens/cards.screen"
import ProfileScreen from "../screens/profile.screen"
import TabbarNavigation from "./tabbar.navigation"
import SplashScreen from "../screens/splash.screen"
import { useEffect, useState } from "react"

const ScreensNavigation = () => {

  const BottomTabNavigator = createBottomTabNavigator()
  const [isSplashScreenVisible, setIsSplashScreenVisible] = useState<boolean>(true)

  const BottomTabStack = () => {
    return (
      <BottomTabNavigator.Navigator initialRouteName="Cards" screenOptions={{headerShown: false}} tabBar={(props)=><TabbarNavigation {...props}/>}>
        <BottomTabNavigator.Screen name="Home" component={HomeScreen} />
        <BottomTabNavigator.Screen name="Cards" component={CardsScreen} />
        <BottomTabNavigator.Screen name="Profile" component={ProfileScreen} />
      </BottomTabNavigator.Navigator>
    )
  }
  
  useEffect(()=>{
    setIsSplashScreenVisible(false)
  },[])
  
  return (
    <>
      <SplashScreen isVisible={isSplashScreenVisible}/>
      <BottomTabStack/>
    </>
  )
}

export default ScreensNavigation