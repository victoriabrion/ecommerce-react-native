import { StyleSheet, View, InputForm, SubmitButton, Pressable, Text } from 'react-native'
import colors from '../utils/globals/colors'
import { useState } from 'react'
import { useLoginMutation } from '../app/services/auth'
import { setUser } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'

const Login = () => {

const dispatch = useDispatch()
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [triggerLogin] = useLoginMutation()

const onSubmit = async () => {
    const {data} = await triggerLogin({email, password})
        dispatch(setUser({email: data.email, idToken: data.idToken}))
}

  return (
    <View style={styles.main}>
        <View style={styles.container}>
            <InputForm label='Email' value={email} onChangeText={(t) => setEmail(t)} isSecure={false} error=''/>
            <InputForm label='Password' value={password} onChangeText={(t) => setPassword(t)} isSecure={true} error=''/>
            <SubmitButton onPress={onSubmit} title='Send'/>
            <Text style={styles.sub}> Don't you have an account? </Text>
            <Pressable onPress={() => navigation.navigate('Register')}>
                <Text style={styles.subLink}>Register</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    main:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30
      },
      container:{
        width: '90%',
        backgroundColor: colors.primary,
        gap: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20
      },
      title:{
        fontSize: 22,
        fontFamily: 'Poppins'
      },
      sub:{
        fontSize: 14,
        fontFamily: 'Poppins'
      },
      subLink:{
        fontSize: 14,
        fontFamily: 'Poppins',
        color: 'Poppins'
      }
})