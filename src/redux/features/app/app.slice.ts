import { createSlice } from "@reduxjs/toolkit"
import AppType from "../../../type/app.type"

const initialState: AppType = {
  foundations: {
    fontFamily: "Arial",
    brand1: "#EF4A15",
    brand2: "#f26e44",
    brand3: "#FF3D00",
  }
}

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeFontFamily: (state, action) => {
      state.foundations.fontFamily = action.payload
    },
    changeBrand1: (state, action) => {
      state.foundations.brand1 = action.payload
    },
    changeBrand2: (state, action) => {
      state.foundations.brand2 = action.payload
    },
    changeBrand3: (state, action) => {
      state.foundations.brand3 = action.payload
    }
  }
})

export const { changeFontFamily, changeBrand1, changeBrand2, changeBrand3 } = appSlice.actions
export default appSlice