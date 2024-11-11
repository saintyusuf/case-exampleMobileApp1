import { useEffect, useState } from "react"
import TextComponent from "../components/text.component"
import { getAutoColors } from "../theme"
import Animated, { Easing, Keyframe } from "react-native-reanimated"

interface Props {
  isVisible: boolean
}

const SplashScreen = (props:Props) => {

  const autoColors = getAutoColors()
  
  const [isAnimationFinished, setIsAnimationFinished] = useState<boolean>(false)
  const [isReadyToExit, setIsReadyToExit] = useState<boolean>(false)

  const keyframeBg = new Keyframe({
    0: {
      opacity: 1
    },
    90: {
      opacity: 1
    },
    100: {
      opacity: 0
    }
  })

  const keyframeText = new Keyframe({
    0: {
      transform: [{scale: 1}],
      opacity: 1
    },
    50: {
      transform: [{scale: 1.35}],
      opacity: 1,
      easing: Easing.bezier(0.25, 1, 0.5, 1).factory(),
      
    },
    51: {
      transform: [{scale: 1.35}],
      opacity: 1,
    },
    100: {
      transform: [{scale: 0}],
      opacity: 0,
      easing: Easing.bezier(0.25, 1, 0.5, 1).factory(),
    }
  })

  useEffect(()=>{
    setTimeout(()=>{
      setIsAnimationFinished(true)
    }, 1000)
  },[])

  useEffect(()=>{
    if(isAnimationFinished && !props.isVisible){
      setIsReadyToExit(true)
    }
  },[isAnimationFinished, props.isVisible])
  
  if(!isReadyToExit){
    return (
      <Animated.View 
        style={{position: "absolute", left: 0, top: 0, width: "100%", height: "100%", zIndex: 100, backgroundColor: autoColors.bg1, flex: 1, justifyContent: "center", alignItems: "center"}}
        exiting={keyframeBg.duration(1500)}
      >
        <Animated.View
          exiting={keyframeText.duration(1500)}
        >
          <TextComponent>case-exampleMobileApp1</TextComponent>
        </Animated.View>
      </Animated.View>
    )
  } else {
    return null
  }
}

export default SplashScreen