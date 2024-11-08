import { Easing, SharedValue, withTiming } from "react-native-reanimated"
import hapticFunction, { TypeHaptic } from "./haptic.function"

interface Props {
  element: SharedValue<number>
  targetValue: number
  duration?: number
  easing?: "elastic" | "ease"
  haptic?: TypeHaptic | false
}

const animateFunction = (props:Props) => {

  const { element, targetValue, duration = 200, easing = "elastic", haptic = false } = props
  
  element.value = withTiming(targetValue, {
    duration: duration,
    easing: easing === "elastic" ? Easing.elastic(2) : Easing.ease,
  })

  haptic && hapticFunction(haptic)
  
}

export default animateFunction