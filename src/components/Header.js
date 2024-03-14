import { Pressable, StyleSheet, Text, View } from 'react-native'
import colors from '../utils/globals/colors'
import { AntDesign } from '@expo/vector-icons'

const Header = ({title = 'Ecommerce', navigation}) => {

  return (
    <View style= {styles.container}>
      {navigation.canGoBack() &&
      <Pressable style = {styles.goBack} onPress={() => navigation.goBack()}>
        <AntDesign name = 'back' size = {25} color = 'white' />
      </Pressable>}
      <Text style= {styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  text: {
    fontSize:30,
    fontFamily: 'Poppins',
    color: colors.tertiary,
    paddingTop: 20
  },
  goBack: {
    position: 'absolute',
    left: 10,
    bottom: 25,
  }
})