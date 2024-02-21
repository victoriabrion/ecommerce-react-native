import { StyleSheet, Text, View , Pressable, Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import products from '../utils/data/products.json'
import Header from '../components/Header'
import colors from '../utils/globals/colors'

const ItemDetail = ({productId}) => {

  const [product, setProduct] = useState ({})

  useEffect(() => {

    const productFinded = products.find(product => product.id === productId)
    setProduct(productFinded)
  }, [productId])

  return (
    <View style = {styles.container}>
    <Header title='Product detail'/>
    <View style = {styles.content}>
      <Image style ={styles.image} source= {{uri:product?.thumbnail}} resizeMode= 'cover' />
      <View style= {styles.containerText}>
        <Text style= {styles.title}>{product.title}</Text>
        <Text>{product.description}</Text>
      </View>
      <View style={styles.containerPrice}>
        <Text style= {styles.price}>$ {product.price}</Text>
        <Pressable style={styles.buyNow}>
          <Text style={styles.buyNowText}>Add to cart</Text>
        </Pressable>
      </View>
    </View>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'start',
    alignItems:'center',
    fontFamily: 'Poppins'
  },
  content: {
    width: '100%'
  },
  image: {
    width: '100%',
    height: 300
  },
  containerText: {
    gap: 25,
    paddingHorizontal: 5,
    paddingVertical: 25,
    fontFamily: 'Poppins'
  },
  containerPrice: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
    fontFamily: 'Poppins'
  },
title: {
  fontSize: 20,
  fontWeight: 'bold',
  fontFamily: 'Poppins'
},
price: {
  fontSize: 30,
  fontFamily: 'Poppins'
},
buyNow: {
  backgroundColor: colors.secondary,
  paddingVertical: 5,
  paddingHorizontal: 10,
  borderRadius: 5
},
buyNowText: {
  color: 'white',
  fontFamily: 'Poppins'
}
})