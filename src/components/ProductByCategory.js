import { StyleSheet, Text, View, Image } from 'react-native'
import colors from '../utils/globals/colors'

const ProductByCategory = ({item}) => {
  return (
    <View style = {styles.container}>
        <Image style = {styles.image} source= {{uri: item.thumbnail}} resizeMode='cover'/>
        <Text style = {styles.text}> {item.id}{item.title}</Text>
    </View>
  )
}

export default ProductByCategory

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.tetrary,
        width: '80%',
        marginHorizontal: '10%',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    text: {
        width: '60%',
        fontSize: 16
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 5
    }
})