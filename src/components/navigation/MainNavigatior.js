import Home from "../../screens/Home"
import ItemDetail from "../../screens/ItemDetail"
import ItemListCategory from "../../screens/ItemListCategory"
import Header from "../Header"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const MainNavigatior = () => {
  return (
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
  )
}

export default MainNavigatior

