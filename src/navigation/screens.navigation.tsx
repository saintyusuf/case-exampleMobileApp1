import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/home.screen"
import CardsScreen from "../screens/cards.screen"
import ProfileScreen from "../screens/profile.screen"
import TabbarNavigation from "./tabbar.navigation"

const ScreensNavigation = () => {

  const BottomTabNavigator = createBottomTabNavigator()

  const BottomTabStack = () => {
    return (
      <BottomTabNavigator.Navigator initialRouteName="Cards" screenOptions={{headerShown: false}} tabBar={(props)=><TabbarNavigation {...props}/>}>
        <BottomTabNavigator.Screen name="Home" component={HomeScreen} />
        <BottomTabNavigator.Screen name="Cards" component={CardsScreen} />
        <BottomTabNavigator.Screen name="Profile" component={ProfileScreen} />
      </BottomTabNavigator.Navigator>
    )
  }
  
  return (
    <BottomTabStack/>
  )
}

export default ScreensNavigation