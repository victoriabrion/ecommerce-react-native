import {StatusBar} from 'react-native'
import { useFonts } from "expo-font"
import { fontCollection } from './src/utils/globals/fonts'
import colors from './src/utils/globals/colors'
import MainNavigatior from './src/navigation/MainNavigatior'
import { store } from './src/app/store'
import { Provider } from 'react-redux'


const App = () => {

  const [fontsLoaded] = useFonts (fontCollection)

  if (!fontsLoaded) return null
  

  return (
    <>
    <StatusBar backgroundColor={colors.tertiary}  barStyle= 'light-content'/>
    <Provider store={store}>
      <MainNavigatior />
    </Provider>
    </>
  )
}

export default App

