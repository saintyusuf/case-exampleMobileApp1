import { useColorScheme } from "react-native"

const colors = {
  // BG COLORS
  lmBg1: "#ffffff",
  lmBg2: "#F8F9FA",

  dmBg1: "#000000",
  dmBg2: "#121212",

  // TEXT COLORS
  lmText1: "#000000",
  lmText2: "#C1C8CD",

  dmText1: "#ffffff",
  dmText2: "#C1C8CD",

  // BORDER COLORS
  lmBorder1: "#eaedef",
  lmBorder2: "#f4f5f6",

  dmBorder1: "#333333",
  dmBorder2: "#444444",

  // BRAND COLORS
  brand1: "#E13915",
  brand2: "#f7cbbd",
}

const autoColors = () => {

  const colorMode = useColorScheme()
  
  return {
    bg1: colorMode === "light" ? colors.lmBg1 : colors.dmBg1,
    bg2: colorMode === "light" ? colors.lmBg2 : colors.dmBg2,
    text1: colorMode === "light" ? colors.lmText1 : colors.dmText1,
    text2: colorMode === "light" ? colors.lmText2 : colors.dmText2,
    border1: colorMode === "light" ? colors.lmBorder1 : colors.dmBorder1,
    border2: colorMode === "light" ? colors.lmBorder2 : colors.dmBorder2,
    brand1: colors.brand1,
    brand2: colors.brand2,
  }
  
}

export { autoColors }
export default colors