import { trigger } from "react-native-haptic-feedback"

export type TypeHaptic = "select" | "1" | "2" | "3" | "success" | "warning" | "error"

const hapticFunction = ( animationName: TypeHaptic ) => {

  if(animationName === "select") {
    trigger("selection")
  } else if(animationName === "1") {
    trigger("impactLight")
  } else if(animationName === "2") {
    trigger("impactMedium")
  } else if(animationName === "3") {
    trigger("impactHeavy")
  } else if(animationName === "success") {
    trigger("notificationSuccess")
  } else if(animationName === "warning") {
    trigger("notificationWarning")
  } else if(animationName === "error") {
    trigger("notificationError")
  }
  
}

export default hapticFunction