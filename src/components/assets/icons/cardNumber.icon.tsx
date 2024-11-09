import Svg, { Path } from "react-native-svg"
import SvgType from "../../../type/svg.type"
import { getAutoColors } from "../../../theme"

const CardNumberIcon = (props:SvgType) => {

  const autoColors = getAutoColors()
  
  return (
    <Svg width={props.width || 15} height={props.height || 13} viewBox="0 0 15 13" fill="none" style={props.style}>
      <Path fillRule="evenodd" clipRule="evenodd" d="M13.4965 2.53388C13.4275 1.2149 12.3362 0.166656 11 0.166656H3L2.86723 0.170122C1.54824 0.239141 0.5 1.33048 0.5 2.66666V3.33332V7.99999L0.503465 8.13276C0.572484 9.45175 1.66383 10.5 3 10.5H3.66667L3.73451 10.4954C3.97856 10.4623 4.16667 10.2531 4.16667 9.99999C4.16667 9.72385 3.94281 9.49999 3.66667 9.49999H3L2.8973 9.49653C2.11677 9.44375 1.5 8.7939 1.5 7.99999V3.83332H12.5V5.33332L12.5046 5.40117C12.5377 5.64522 12.7469 5.83332 13 5.83332C13.2761 5.83332 13.5 5.60946 13.5 5.33332V3.33332V2.66666L13.4965 2.53388ZM12.5 2.83332V2.66666C12.5 1.87275 11.8832 1.22289 11.1027 1.17012L11 1.16666H3C2.20609 1.16666 1.55624 1.78343 1.50346 2.56396L1.5 2.66666V2.83332H12.5ZM7 6.83332H12.3333C13.3459 6.83332 14.1667 7.65413 14.1667 8.66666V10.6667C14.1667 11.6792 13.3459 12.5 12.3333 12.5H7C5.98748 12.5 5.16667 11.6792 5.16667 10.6667V8.66666C5.16667 7.65413 5.98748 6.83332 7 6.83332ZM12.3333 7.83332H7C6.53976 7.83332 6.16667 8.20642 6.16667 8.66666V10.6667C6.16667 11.1269 6.53976 11.5 7 11.5H12.3333C12.7936 11.5 13.1667 11.1269 13.1667 10.6667V8.66666C13.1667 8.20642 12.7936 7.83332 12.3333 7.83332ZM7.96413 9.26144C7.76839 9.1162 7.49061 9.13234 7.3131 9.30985L7.26136 9.36926C7.11615 9.56503 7.13256 9.84308 7.3131 10.0236L7.36918 10.072C7.56495 10.2172 7.843 10.2008 8.02354 10.0203L8.07195 9.96421C8.21716 9.76844 8.20075 9.49039 8.02021 9.30985L7.96413 9.26144ZM9.3131 9.30985C9.49061 9.13234 9.76839 9.1162 9.96413 9.26144L10.0202 9.30985C10.2008 9.49039 10.2172 9.76844 10.072 9.96421L10.0235 10.0203C9.843 10.2008 9.56495 10.2172 9.36918 10.072L9.3131 10.0236C9.13256 9.84308 9.11615 9.56503 9.26136 9.36926L9.3131 9.30985ZM11.9644 9.26144C11.7686 9.1162 11.4909 9.13234 11.3133 9.30985L11.2616 9.36926C11.1164 9.56503 11.1328 9.84308 11.3133 10.0236L11.3694 10.072C11.5652 10.2172 11.8432 10.2008 12.0238 10.0203L12.0722 9.96421C12.2174 9.76844 12.201 9.49039 12.0205 9.30985L11.9644 9.26144Z" fill={props.color || autoColors.text1}/>
    </Svg>
  )
}

export default CardNumberIcon