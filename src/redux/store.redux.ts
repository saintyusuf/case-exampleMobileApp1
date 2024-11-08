import {configureStore, combineReducers} from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import AsyncStorage from "@react-native-async-storage/async-storage"
import reactotron from "../../reactotron"

// SLICES 
import appSlice from "./features/app/app.slice"

const persistConfig = {
  storage: AsyncStorage,
  key: "root",
  whitelist: ["app"]
}

const rootReducer = combineReducers({
  app: appSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false
  }),
  enhancers: getDefaultEnhancers => getDefaultEnhancers().concat([reactotron.createEnhancer()])
})

export const persistor = persistStore(store)
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch