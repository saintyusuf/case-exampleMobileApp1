import { Text, TextProps } from "react-native"
import { getAutoColors, getFonts } from "../theme"

type Props = {
  
} & TextProps

const TextComponent = (props:Props) => {

  const {style, ...propsRest} = props
  const autoColors = getAutoColors()
  const fonts = getFonts()
  
  return (
    <Text {...propsRest} style={[{fontSize: 14, color: autoColors.text1, fontFamily: fonts.fontFamily}, style]}>{props.children}</Text>
  )
}

export default TextComponent