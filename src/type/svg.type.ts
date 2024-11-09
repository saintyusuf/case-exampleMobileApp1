import { ViewStyle } from "react-native"
import { NumberProp } from "react-native-svg"

export default interface SvgType {
  width?: NumberProp,
  height?: NumberProp,
  color?: string
  style?: ViewStyle
}