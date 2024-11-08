import { Provider as ReduxProviderBase } from "react-redux"
import store, { persistor } from "./store.redux"
import { PersistGate } from "redux-persist/integration/react"

interface Props {
  children?: React.ReactNode
}

const ReduxProvider = (props:Props) => {
  return (
    <ReduxProviderBase store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {props.children}
      </PersistGate>
    </ReduxProviderBase>
  )
}

export default ReduxProvider