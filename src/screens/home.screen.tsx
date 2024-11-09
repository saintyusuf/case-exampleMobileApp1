import { View, Text } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { getAutoColors } from "../theme"

const HomeScreen = () => {

  const autoColors = getAutoColors()
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: autoColors.bg2}}>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen