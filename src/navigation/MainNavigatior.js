import { NavigationContainer } from '@react-navigation/native'
import OrdersStack from './OrdersStack'
import ShopStack from './ShopStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CartStack from './CartStack'
import { StyleSheet, View, Text } from 'react-native'
import colors from '../utils/globals/colors'
import TabBarIcon from '../components/TabBarIcon'

const Tab = createBottomTabNavigator();

const MainNavigatior = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='ShopStack' screenOptions={{headerShown:false, tabBarShowLabel:false, tabBarStyle: styles.tabBar}}>
        <Tab.Screen name= 'ShopStack' component={ShopStack} options={{tabBarIcon: ({focused}) => <TabBarIcon title='Products' nameIcon='home' focused={focused}/>}}/>
        <Tab.Screen name= 'CartStack' component={CartStack} options={{tabBarIcon: ({focused}) => <TabBarIcon title='Cart' nameIcon='shopping-cart' focused={focused}/>}}/>
        <Tab.Screen name= 'OrdersStack' component={OrdersStack} options={{tabBarIcon: ({focused}) => <TabBarIcon title='Order' nameIcon='list' focused={focused}/>}}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigatior

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.primary,
    shadowColor: colors.tertiary,
    elevation: 4,
    position: 'absolute',
    borderRadius: 15,
    bottom: 20,
    left: 20,
    right: 20,
    height: 60,
  }
})
