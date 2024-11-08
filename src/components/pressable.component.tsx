import React from "react"
import { Pressable, PressableProps, ViewProps } from "react-native"
import Animated, { useSharedValue } from "react-native-reanimated"
import animateFunction from "../functions/animate.function"

type Props = {
  children: React.ReactNode
  styleInside: ViewProps["style"]
} & PressableProps

const PressableComponent = ( props: Props ) => {

  const { styleInside, ...propsRest } = props
  const animationScale = useSharedValue(1)
  
  return (
      <Pressable
        onTouchStart={()=>animateFunction({element: animationScale, targetValue: 0.9, duration: 100, easing: "ease", haptic: "select"})}
        onTouchEnd={()=>animateFunction({element: animationScale, targetValue: 1})}
        {...propsRest}
      >
        <Animated.View
          style={[{
            transform: [{scale: animationScale}]
          }, styleInside]}
        >
          {props.children}
        </Animated.View>
      </Pressable>
  )
}

export default PressableComponent