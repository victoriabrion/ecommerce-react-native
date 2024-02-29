import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import colors from '../utils/globals/colors'

const CartItem = ({item}) => {
  return (
    <View style={styles.card}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.text2}>{item.brand}</Text>
            <Text style={styles.text2}>{item.price}</Text>
        </View>
        <Entypo name='trash' size={30} color= {colors.primary} />
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.secondary,
        padding: 20,
        margin: 10,
        borderRadius:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 110,
        alignItems: 'center'
    },
    textContainer: {
        width: '80%'
    },
    text: {
        color: colors.tertiary,
        fontSize: 18,
        fontFamily: 'Poppins',
        fontWeight: 'bold'
    },
    text2: {
        color: colors.quaternary,
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: 'bold'
    }
})