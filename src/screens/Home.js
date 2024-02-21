import { StyleSheet, View, FlatList, Text } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories'
import { fontCollection } from '../utils/globals/fonts'

const Home = ({selectedCategoryState}) => {
  return (
    <>
        <Header title='Home' style= {styles.container}/>
        <Categories selectedCategoryState = {selectedCategoryState}/>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
   
})