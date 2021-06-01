import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { login, verifyCode } from '../reducers/authReducer'
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Login(props) {
  const dispatch = useDispatch();
  const [isSubmitPhone, setIsSubmitPhone] = useState(false);
  const [phone, setPhone] = useState();
  const [code, setCode] = useState();

  const { isOpen, onclose } = props

  const userInfo = useSelector((store) => store.authReducer.userInfo);

  useEffect(() => {
    // userInfo && onclose && onclose()
    if (userInfo) {
      onclose && onclose()
    }
  }, [userInfo])

  const onChangePhone = (value) => {
    // setAccount(prev => ({ ...prev, [type]: value }))
    setPhone(value)
  }

  const onChangeCode = (value) => {
    setCode(value)
  }

  const handleLogin = () => {
    // call api here
    setIsSubmitPhone(true)
    phone ? dispatch(verifyCode({ phone, otp: code })) : dispatch(login({ phone }))
  }

  const handleClose = () => onclose && onclose()

  return (
    <Modal isVisible={isOpen} animationOut='fadeOutDown'>
      <View style={{ flex: 1, borderColor: 1, borderWidth: 1, paddingTop: 30, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={handleClose} style={styles.btnClose}>
          <Ionicons name="close-circle-outline" size={30} color={'black'} />
        </TouchableOpacity>
        {!isSubmitPhone ?
          <View style={{ width: '100%' }}>
            <Text>Phone</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangePhone}
              value={phone}
            />
          </View>

          :
          <View style={{ width: '100%' }}>
            <Text>Code</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeCode}
              value={code}
            />
          </View>
        }
        <TouchableOpacity onPress={handleLogin} style={styles.btn}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </Modal>

  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '90%',
    margin: 12,
    borderWidth: 1,
  },
  btn: {
    width: '30%',
    borderWidth: 1, height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  btnClose: {
    height: 50,
    width: 50,
    position: 'absolute',
    top: 5,
    right: 0,
  }
});
