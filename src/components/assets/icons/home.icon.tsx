import React from "react"
import { Path, Svg } from "react-native-svg"
import { getAutoColors } from "../../../theme"
import SvgType from "../../../type/svg.type"

const HomeIcon = (props:SvgType) => {

  const autoColors = getAutoColors()
    
  return (
    <Svg width={props.width || 20} height={props.height || 20} viewBox="0 0 20 20" fill="none">
      <Path d="M12.0836 3.24573L16.2935 6.69137C17.2273 7.45572 17.6683 8.67077 17.4413 9.85577L16.4889 14.826C16.1923 16.3758 14.8362 17.4968 13.258 17.4968H6.74123C5.16308 17.4968 3.80785 16.3758 3.51038 14.826L2.55879 9.85577C2.33184 8.67077 2.77197 7.45572 3.70572 6.69137L7.91652 3.24573C9.12825 2.25362 10.8718 2.25362 12.0836 3.24573Z" stroke={props.color || autoColors.text1} stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M7.83041 17.4971V14.7097C7.83041 13.5109 8.80226 12.5391 10.0011 12.5391C11.1998 12.5391 12.1717 13.5109 12.1717 14.7097V17.4971" stroke={props.color || autoColors.text1} stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  )
}

export default HomeIcon