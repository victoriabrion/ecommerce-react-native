import { FlatList, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import products from '../utils/data/products.json'
import { useEffect, useState } from 'react'
import ProductByCategory from '../components/ProductByCategory'
import SearchBar from '../components/SearchBar'

const ItemListCategory = ({categorySelected}) => {

  const [productsFiltered, setProductsFiltered] = useState ([])

  const [keyWord, setKeyWord] = useState ('')

  const handlerKeyWord = (k) => {
    setKeyWord(k)
  }

  useEffect (() => {
    if (categorySelected) setProductsFiltered(products.filter (product => product.category === categorySelected))
    if (keyWord) setProductsFiltered(productsFiltered.filter(product => {
      const productTitleLower = product.title.toLocaleLowerCase()
      const keyWordLower = keyWord.toLocaleLowerCase()
      return productTitleLower.includes(keyWordLower)
    }))
  }, [categorySelected, keyWord])


  return (
    <>
    <Header title= {categorySelected} />
    <SearchBar handlerKeyWord= {handlerKeyWord}/>
    <FlatList style= {styles.container} data = {productsFiltered} keyExtractor= {item => item.id} renderItem={({item}) => <ProductByCategory item = {item} />} />
    </>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Poppins'
  }
})