import { Svg, G, Path, Defs, Filter, FeFlood, FeBlend, FeGaussianBlur } from "react-native-svg"
import { getAutoColors } from "../../../theme"
import IconType from "../../../type/svg.type"

const CardBackground = (props:IconType) => {  

  const autoColors = getAutoColors()
  
  return (
    <Svg width={props.width || 375} height={props.height || 250} viewBox="0 0 375 250" style={props.style}>
      <G opacity="0.5" filter="url(#filter0_f_0_2340)">
        <G filter="url(#filter1_f_0_2340)">
          <Path d="M132.639 167.034C70.9672 167.034 1.72131 129.069 -21 152.338V257.662H441V98.4511C423.689 91.9194 374.134 80.5705 314.41 87.4288C239.754 96.0017 194.311 167.034 132.639 167.034Z" fill={props.color || autoColors.brand3}/>
        </G>
        <G filter="url(#filter2_f_0_2340)">
          <Path d="M132.639 195.466C70.9672 195.466 1.72131 157.5 -21 180.77V286.094H441V126.883C423.689 120.351 374.134 109.002 314.41 115.86C239.754 124.433 194.311 195.466 132.639 195.466Z" fill={props.color || autoColors.brand3}/>
        </G>
        <G filter="url(#filter3_f_0_2340)">
          <Path d="M132.639 209.681C70.9672 209.681 1.72131 171.715 -21 194.984V300.309H441V141.097C423.689 134.566 374.134 123.217 314.41 130.075C239.754 138.648 194.311 209.681 132.639 209.681Z" fill={props.color || autoColors.brand3}/>
        </G>
      </G>
      <Defs>
        <Filter id="filter0_f_0_2340" x="-106.292" y="0.00847626" width="632.585" height="385.592" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <FeFlood floodOpacity="0" result="BackgroundImageFix"/>
          <FeBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <FeGaussianBlur stdDeviation="42.6462" result="effect1_foregroundBlur_0_2340"/>
        </Filter>
        <Filter id="filter1_f_0_2340" x="-38.7692" y="67.5315" width="497.538" height="207.9" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <FeFlood floodOpacity="0" result="BackgroundImageFix"/>
          <FeBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <FeGaussianBlur stdDeviation="8.88462" result="effect1_foregroundBlur_0_2340"/>
        </Filter>
        <Filter id="filter2_f_0_2340" x="-38.7692" y="95.9632" width="497.538" height="207.9" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <FeFlood floodOpacity="0" result="BackgroundImageFix"/>
          <FeBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <FeGaussianBlur stdDeviation="8.88462" result="effect1_foregroundBlur_0_2340"/>
        </Filter>
        <Filter id="filter3_f_0_2340" x="-38.7692" y="110.178" width="497.538" height="207.9" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <FeFlood floodOpacity="0" result="BackgroundImageFix"/>
          <FeBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <FeGaussianBlur stdDeviation="8.88462" result="effect1_foregroundBlur_0_2340"/>
        </Filter>
      </Defs>
    </Svg>
  )
}

export default CardBackground