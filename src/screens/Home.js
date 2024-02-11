import { StyleSheet, View, FlatList, Text } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <View>
        <Header title='Home' style= {styles.container}/>
        <Categories />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
   
})