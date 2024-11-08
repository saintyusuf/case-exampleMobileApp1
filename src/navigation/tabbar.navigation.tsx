import { LayoutChangeEvent, SafeAreaView, View } from "react-native"
import React, { useEffect } from "react"
import HomeIcon from "../components/icons/home.icon"
import { autoColors } from "../theme"
import CardsIcon from "../components/icons/cards.icon"
import ProfileIcon from "../components/icons/profile.icon"
import TextComponent from "../components/text.component"
import { useTranslation } from "react-i18next"
import PressableComponent from "../components/pressable.component"
import { BottomTabBarProps } from "@react-navigation/bottom-tabs"
import Animated, { Easing, useSharedValue, withSpring, withTiming } from "react-native-reanimated"

const TabbarNavigation = ({state,navigation}:BottomTabBarProps) => {

  const colors = autoColors()
  const { t } = useTranslation()

  const [dimensions, setDimensions] = React.useState({width: 0})
  const animationLinePosition = useSharedValue(0)
  
  const onTabbarLayout = (e: LayoutChangeEvent) => {
    setDimensions({
      width: e.nativeEvent.layout.width
    })
  }

  useEffect(() => {
    const pressableWidth = dimensions.width / state.routes.length
    const pressableCenter = ((state.index + 1) * pressableWidth) - (pressableWidth / 2) - 30
    animationLinePosition.value = withSpring(pressableCenter, {
      duration: 1200
    })
  }, [dimensions, state])

  return (
    <SafeAreaView 
      onLayout={onTabbarLayout}
      style={{flexDirection: "row", backgroundColor: colors.bg1, borderRadius: 10, 
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        }, 
        shadowOpacity: 0.15, 
        shadowRadius: 10, 
        elevation: 0
      }}
    >
      <Animated.View style={{position: "absolute", left: animationLinePosition, width: 60, borderTopWidth: 2, borderTopColor: colors.brand1}}/>
      {
        state.routes.map((route:any, index:number) => {

          const isFocused = state.index === index
    
          const color = isFocused ? colors.brand1 : colors.text2

          const label = t(`tabbar.${route.name.toLowerCase()}`)

          const icon =
            route.name === "Home" ? <HomeIcon color={color}/> :
            route.name === "Cards" ? <CardsIcon color={color}/> :
            route.name === "Profile" ? <ProfileIcon color={color}/> : ""

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            })
    
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name)
            }
          }
    
          return (
            <View 
              key={route.key}
              style={{flex: 1, height: 52, marginTop: 12.5, flexDirection: "column", justifyContent: "center", alignItems: "center"}}
            >
              <PressableComponent
                style={{flex: 1, width: "100%"}}
                styleInside={{flex: 1, justifyContent: "center", alignItems: "center"}}
                onPress={onPress}
              >
                {icon}
                <TextComponent style={{color, marginTop: 5}}>{label}</TextComponent>
              </PressableComponent>
            </View>
          )
        })
      }
    </SafeAreaView>
  )
}

export default TabbarNavigation