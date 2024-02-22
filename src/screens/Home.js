import { StyleSheet } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories'
import { fontCollection } from '../utils/globals/fonts'

const Home = ({navigation}) => {
  return (
    <>
        <Categories navigation = {navigation}/>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
   
})