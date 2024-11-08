import React from 'react'
import { Path, Svg } from "react-native-svg"
import { autoColors } from '../../theme'

interface Props {
  width?: number,
  height?: number,
  color?: string
}

const ProfileIcon = (props:Props) => {

  const colors = autoColors()
  
  return (
    <Svg width={props.width || 20} height={props.height || 20} viewBox="0 0 20 20" fill="none">
      <Path d="M9.44219 12.3958C6.62935 12.3958 4.23016 12.8211 4.23016 14.5233C4.23016 16.2256 6.61566 16.6659 9.44219 16.6659" stroke={props.color || colors.text1} stroke-linecap="round" stroke-linejoin="round"/>
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M12.7717 6.66292C12.7717 8.5014 11.2814 9.99256 9.44216 9.99256C7.60367 9.99256 6.11328 8.5014 6.11328 6.66292C6.11328 4.82443 7.60367 3.33331 9.44216 3.33331C11.2814 3.33331 12.7717 4.82443 12.7717 6.66292Z" stroke={props.color || colors.text1} stroke-linecap="round" stroke-linejoin="round"/>
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M11.7774 14.4298C11.5331 13.6658 11.8185 12.7938 12.6199 12.5358C13.0415 12.401 13.5028 12.4781 13.8566 12.744C14.2112 12.481 14.6703 12.4032 15.0919 12.5358C15.8926 12.7938 16.1809 13.6658 15.9365 14.4298C15.556 15.6391 13.8566 16.5717 13.8566 16.5717C13.8566 16.5717 12.1709 15.6535 11.7774 14.4298Z" stroke={props.color || colors.text1} stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
    
  )
}

export default ProfileIcon