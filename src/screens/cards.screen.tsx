import { View, Text } from "react-native"
import React from "react"
import { autoColors } from "../theme"
import { SafeAreaView } from "react-native-safe-area-context"

const CardsScreen = () => {

  const colors = autoColors()
  
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: colors.bg2}}
    >
      <Text>CardsScreen</Text>
    </SafeAreaView>
  )
}

export default CardsScreen