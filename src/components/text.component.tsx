import { View, Text, TextProps } from "react-native"

type Props = {
  
} & TextProps

const TextComponent = (props:Props) => {

  const {style, ...propsRest} = props
  
  return (
    <Text {...propsRest} style={[{fontSize: 12}, style]}>{props.children}</Text>
  )
}

export default TextComponent