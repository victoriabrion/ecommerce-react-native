import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './TabNavigator'
import AuthStack from './AuthStack'
import { useSelector } from 'react-redux'


const MainNavigatior = () => {

  const user = useSelector((state => state.auth))


  return (
    <NavigationContainer>
      {user.idToken ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default MainNavigatior

