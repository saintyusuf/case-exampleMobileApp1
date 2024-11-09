import { View, Text, TextProps } from "react-native"
import { getAutoColors } from "../theme"

type Props = {
  
} & TextProps

const TextComponent = (props:Props) => {

  const {style, ...propsRest} = props
  const autoColors = getAutoColors()
  
  return (
    <Text {...propsRest} style={[{fontSize: 14, color: autoColors.text1}, style]}>{props.children}</Text>
  )
}

export default TextComponent