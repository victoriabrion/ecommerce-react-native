import { StyleSheet, View, StatusBar} from 'react-native'
import Home from './src/screens/Home'
import ItemListCategory from './src/screens/ItemListCategory'
import ItemDetail from './src/screens/ItemDetail'
import { useEffect, useState } from 'react'
import { useFonts } from "expo-font"
import { fontCollection } from './src/utils/globals/fonts'
import colors from './src/utils/globals/colors'


const App = () => {

  const [fontsLoaded] = useFonts (fontCollection)

  const  [categorySelected, setCategorySelected] = useState ('')

  const [productId, setProductId] = useState (0)

  const selectedCategoryState = (category) => {
    setCategorySelected(category)
  }

  const selectedProductId = (id) => {
    setProductId(id)
  }

  if (!fontsLoaded) return null
  

  return (
    <>
    <StatusBar backgroundColor={colors.tertiary}  barStyle= 'light-content'/>
      <View style= {styles.container}>
        {categorySelected ? productId ? <ItemDetail productId= {productId}/> : <ItemListCategory selectedProductId={selectedProductId} categorySelected= {categorySelected} /> : <Home selectedCategoryState= {selectedCategoryState}/>}
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex:1
  }
})