import { View, Text } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { getAutoColors } from "../theme"

const ProfileScreen = () => {

  const autoColors = getAutoColors()
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: autoColors.bg2}}>
      <Text>ProfileScreen</Text>
    </SafeAreaView>
  )
}

export default ProfileScreen