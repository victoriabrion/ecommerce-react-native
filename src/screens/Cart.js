import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import cart from '../utils/data/cart.json'
import fonts from '../utils/globals/fonts'
import colors from '../utils/globals/colors'
import CartItem from '../components/CartItem'

const Cart = () => {
  return (
    <View style={styles.container}>
        <FlatList data={cart.items} keyExtractor={(item)=> item.id} renderItem={({item})=> <CartItem item={item}/>}/>
        <View style={styles.confirmContainer}>
            <Pressable>
                <Text style={styles.confirmText}>Add</Text>
            </Pressable>
            <Text style={styles.confirmText}>Total: $ {cart.total}</Text>
        </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "space-between",
        marginBottom: 95
    },
    confirmContainer:{
        flexDirection: "row",
        backgroundColor: colors.primary,
        padding: 25,
        justifyContent:"space-between",
    },
    confirmText:{
        fontFamily: 'Poppins',
        fontSize: 18,
        color: colors.tertiary,
        justifyContent: 'center'
    }
})