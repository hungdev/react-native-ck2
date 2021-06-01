import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { login } from '../reducers/authReducer'
export default function Login() {
  const dispatch = useDispatch();
  const [account, setAccount] = useState({ userName: '', password: '' });

  const onChangeText = (type) => (value) => {
    setAccount(prev => ({ ...prev, [type]: value }))
  }

  const handleLogin = () => {
    // call api here
    dispatch(login(account))
  }
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText('userName')}
        value={account?.userName}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText('password')}
        value={account?.password}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.btn}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  btn: {
    width: '30%',
    borderWidth: 1, height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  }
});
