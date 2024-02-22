import { StyleSheet, StatusBar} from 'react-native'
import { useFonts } from "expo-font"
import { fontCollection } from './src/utils/globals/fonts'
import colors from './src/utils/globals/colors'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screens/Home'
import ItemListCategory from './src/screens/ItemListCategory'
import ItemDetail from './src/screens/ItemDetail'
import Header from './src/components/Header'

const Stack = createNativeStackNavigator()

const App = () => {

  const [fontsLoaded] = useFonts (fontCollection)

  if (!fontsLoaded) return null
  

  return (
    <>
    <StatusBar backgroundColor={colors.tertiary}  barStyle= 'light-content'/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={({route, navigation}) => {
                                                  return { 
                                                    header: () => {
                                                      return <Header navigation = {navigation}
                                                                     title={route.name === 'Home' ? 'Store' : 
                                                                            route.name === 'ItemListCategory' ? route.params.categorySelected : 'More info'}/>}}}}>
        <Stack.Screen name= 'Home' component= {Home}></Stack.Screen>
        <Stack.Screen name= 'ItemListCategory' component= {ItemListCategory}></Stack.Screen>
        <Stack.Screen name= 'ItemDetail' component= {ItemDetail}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex:1
  }
})