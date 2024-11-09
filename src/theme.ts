import { useColorScheme } from "react-native"
import { useSelector } from "react-redux"
import { RootState } from "./redux/store.redux"

const baseColors = () => {
  
  const foundationsStates = useSelector((state:RootState)=>state.app.foundations)
  
  return {
    // BG COLORS
    lmBg1: "#ffffff",
    lmBg2: "#F8F9FA",

    dmBg1: "#000000",
    dmBg2: "#121212",

    // TEXT COLORS
    lmText1: "#000000",
    lmText2: "#777777",
    lmText3: "#CCCCCC",

    dmText1: "#ffffff",
    dmText2: "#888888",
    dmText3: "#555555",

    // BORDER COLORS
    lmBorder1: "#eaedef",
    lmBorder2: "#fafafa",

    dmBorder1: "#333333",
    dmBorder2: "#111111",

    // BRAND COLORS
    brand1: foundationsStates.brand1,
    brand2: foundationsStates.brand2,
    brand3: foundationsStates.brand3,
  }
  
}

const getAutoColors = () => {
  
  const colorMode = useColorScheme()

  return {
    bg1: colorMode === "light" ? baseColors().lmBg1 : baseColors().dmBg1,
    bg2: colorMode === "light" ? baseColors().lmBg2 : baseColors().dmBg2,
    text1: colorMode === "light" ? baseColors().lmText1 : baseColors().dmText1,
    text2: colorMode === "light" ? baseColors().lmText2 : baseColors().dmText2,
    text3: colorMode === "light" ? baseColors().lmText3 : baseColors().dmText3,
    border1: colorMode === "light" ? baseColors().lmBorder1 : baseColors().dmBorder1,
    border2: colorMode === "light" ? baseColors().lmBorder2 : baseColors().dmBorder2,
    brand1: baseColors().brand1,
    brand2: baseColors().brand2,
    brand3: baseColors().brand3,
  }
  
}

export { baseColors, getAutoColors }