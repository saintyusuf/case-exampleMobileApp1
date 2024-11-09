import { persistor } from "../redux/store.redux"

const useApp = () => {

  const clearLocalStorage = () => {
    persistor.purge()
  }

  return {
    clearLocalStorage
  }

}

export default useApp