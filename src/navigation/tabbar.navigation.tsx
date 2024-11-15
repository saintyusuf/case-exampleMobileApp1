import { LayoutChangeEvent, SafeAreaView, View } from "react-native"
import { useEffect, useState } from "react"
import { getAutoColors } from "../theme"
import HomeIcon from "../components/assets/icons/home.icon"
import CardsIcon from "../components/assets/icons/cards.icon"
import ProfileIcon from "../components/assets/icons/profile.icon"
import TextComponent from "../components/text.component"
import { useTranslation } from "react-i18next"
import PressableComponent from "../components/pressable.component"
import { BottomTabBarProps } from "@react-navigation/bottom-tabs"
import Animated, { useSharedValue, withTiming } from "react-native-reanimated"

const TabbarNavigation = ({state,navigation}:BottomTabBarProps) => {

  const { t } = useTranslation()
  const autoColors = getAutoColors()

  const [dimensions, setDimensions] = useState({width: 0})
  const animationLinePosition = useSharedValue(0)
  
  const onTabbarLayout = (e: LayoutChangeEvent) => {
    setDimensions({
      width: e.nativeEvent.layout.width
    })
  }

  useEffect(() => {
    const pressableWidth = dimensions.width / state.routes.length
    const pressableCenter = ((state.index + 1) * pressableWidth) - (pressableWidth / 2) - 30
    animationLinePosition.value = withTiming(pressableCenter, {
      duration: 200
    })
  }, [dimensions, state])

  return (
    <SafeAreaView onLayout={onTabbarLayout} style={{backgroundColor: autoColors.bg1}}>
      <View style={{backgroundColor: autoColors.bg2}}>
        <View 
          style={{
            flexDirection: "row",
            backgroundColor: autoColors.bg1,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -15 },
            shadowOpacity: 0.075,
            shadowRadius: 10,
            elevation: 0,
          }}
        >
        <Animated.View style={{position: "absolute", left: animationLinePosition, width: 60, borderTopWidth: 2, borderTopColor: autoColors.brand1}}/>
        {
          state.routes.map((route:any, index:number) => {

            const isFocused = state.index === index
      
            const color = isFocused ? autoColors.brand1 : autoColors.text3

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
                  styleOutside={{flex: 1, width: "100%"}}
                  style={{flex: 1, justifyContent: "center", alignItems: "center"}}
                  onPress={onPress}
                >
                  {icon}
                  <TextComponent style={{color, marginTop: 5, fontSize: 12}}>{label}</TextComponent>
                </PressableComponent>
              </View>
            )
          })
        }
        </View>
      </View>
    </SafeAreaView>
  )
}

export default TabbarNavigation