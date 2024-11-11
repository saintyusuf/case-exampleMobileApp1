import React from "react"
import { Pressable, PressableProps, ViewProps } from "react-native"
import Animated, { useSharedValue } from "react-native-reanimated"
import animateFunction from "../functions/animate.function"
import { getAutoColors } from "../theme"

type Props = {
  children: React.ReactNode
  styleOutside?: ViewProps["style"]
  pressableVariant?: "primary" | "default"
} & PressableProps

const PressableComponent = ( props: Props ) => {

  const { styleOutside, style, ...propsRest } = props
  const autoColors = getAutoColors()
  const animationScale = useSharedValue(1)

  const variants: { [key: string]: { outside: ViewProps["style"], pressable: PressableProps["style"]} } = {
    primary: {
      outside: {
        backgroundColor: autoColors.brand1, padding: 1, borderRadius: 10,
      },
      pressable: {
        minWidth: 125, height: 40, flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: autoColors.brand1, borderRadius: 10, borderWidth: 1, borderColor: autoColors.brand2
      },
    },
    default: {
      outside: {

      },
      pressable: {
        minWidth: 60, height: 32, flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: autoColors.bg1, borderRadius: 10, borderWidth: 1, borderColor: autoColors.border1, paddingHorizontal: 10
      }
    }
  }
  
  return (
    <Animated.View
      style={[{
        transform: [{scale: animationScale}],
      }, props.pressableVariant ? variants[props.pressableVariant].outside : {} as object, styleOutside]}
    >
      <Pressable
        onTouchStart={()=>animateFunction({element: animationScale, targetValue: 0.9, duration: 100, easing: "ease", haptic: "select"})}
        onTouchEnd={()=>animateFunction({element: animationScale, targetValue: 1})}
        style={[props.pressableVariant ? variants[props.pressableVariant].pressable : {} as object, style]}
        {...propsRest}
      >
        {props.children}
      </Pressable>
    </Animated.View>
  )
}

export default PressableComponent