import { FlatList, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import products from '../utils/data/products.json'
import { useEffect, useState } from 'react'
import ProductByCategory from '../components/ProductByCategory'

const ItemListCategory = ({categorySelected}) => {

  const [productsFiltered, setProductsFiltered] = useState ([])

  useEffect (() => {
    setProductsFiltered(products.filter (product => product.category === categorySelected))
  }, [categorySelected])


  return (
    <>
    <Header title= {categorySelected} />
    <FlatList style= {styles.container} data = {productsFiltered} keyExtractor= {item => item.id} renderItem={({item}) => <ProductByCategory item = {item} />} />
    </>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({})