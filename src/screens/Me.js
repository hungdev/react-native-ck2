import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import ModalLogin from './Login'

export default function Me() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = () => setIsOpen(true)
  const onclose = () => setIsOpen(false)


  return (
    <View>
      <Text>Me</Text>
      <TouchableOpacity onPress={handleLogin} style={styles.btn}>
        <Text>Login</Text>
      </TouchableOpacity>
      <ModalLogin isOpen={isOpen} onclose={onclose} />
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
