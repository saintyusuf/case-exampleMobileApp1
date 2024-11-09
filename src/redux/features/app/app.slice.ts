import { createSlice } from "@reduxjs/toolkit"
import AppType from "../../../type/app.type"

const initialState: AppType = {
  foundations: {
    fontFamily: "Arial",
    fontSize: "16px",
    mainColor: "#000",
    secondaryColor: "#fff"
  }
}

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeFontFamily: (state, action) => {
      state.foundations.fontFamily = action.payload
    },
    changeFontSize: (state, action) => {
      state.foundations.fontSize = action.payload
    },
    changeMainColor: (state, action) => {
      state.foundations.mainColor = action.payload
    },
    changeSecondaryColor: (state, action) => {
      state.foundations.secondaryColor = action.payload
    }
  }
})

export const { changeFontFamily, changeFontSize, changeMainColor, changeSecondaryColor } = appSlice.actions
export default appSlice