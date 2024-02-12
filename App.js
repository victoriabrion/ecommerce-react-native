import { StyleSheet, View } from 'react-native'
import Home from './src/screens/Home'
import ItemListCategory from './src/screens/ItemListCategory'
import { useEffect, useState } from 'react'
import { useFonts } from "expo-font"
import { fontCollection } from './src/utils/globals/fonts'


const App = () => {

  const  [categorySelected, setCategorySelected] = useState ('')

  const selectedCategoryState = (category) => {
    setCategorySelected(category)
  }
  const [fontsLoaded] = useFonts (fontCollection)
  
  if (!fontsLoaded) return null
  

  return (
    <>
      {categorySelected ? <ItemListCategory categorySelected= {categorySelected} /> : <Home selectedCategoryState= {selectedCategoryState}/>}
    </>
  )
}

export default App

const styles = StyleSheet.create({})