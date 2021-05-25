import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
// import { Colors, Metrics } from '../themes';
import CartView from '../components/CardView'
import { useDispatch, useSelector } from "react-redux";

// const images = [
//   'https://www.forever21.com/images/default_330/00421842-01.jpg',
//   'https://www.forever21.com/images/default_330/00410895-03.jpg',
//   'https://www.forever21.com/images/default_330/00412718-02.jpg',
//   'https://www.forever21.com/images/default_330/00415030-01.jpg',
//   'https://www.forever21.com/images/default_330/00414874-01.jpg'
// ]
// const data = Array(10).fill('').map((e, i) => ({ id: i + 1, image: images[i] || images[0], name: `item ${i}`, price: '100.000', star: 4 }))

export default function CartScreen() {
  const dispatch = useDispatch();

  const data = useSelector((store) => store.cartReducer.cart);

  const onRemoveAll = () => dispatch({ type: 'REMOVE_ALL' })

  const onRemoveItem = (item) => () => dispatch({ type: 'REMOVE_ITEM', data: item })

  const onChangeQuantity = (type, item) => () => {
    // dispatch({ type: 'CHANGE_QUANTITY', data: item, quantityType: type })
    if (type === 'increase') {
      dispatch({ type: 'ADD_CART', detail: item })
    } else {
      dispatch({ type: 'REDUCE_ITEM', detail: item })
    }
  }

  const renderItem = ({ item }) => {
    return (
      <CartView style={{ flex: 1, margin: 5, flexDirection: 'row' }}>
        <Image source={{ uri: item.image }} style={{ width: 100, height: 100, }} />
        <View style={{ marginLeft: 5, marginVertical: 10, width: '100%', flex: 1, marginLeft: 10 }}>
          <Text style={{ fontSize: 17, }}>{item.name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, width: '100%' }}>
            <View style={{ flex: 1, }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 19, fontWeight: 'bold', marginRight: 10 }}>{item.price}</Text>
                <Text style={{ fontSize: 19, textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>{item.price}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ textAlign: 'center', width: 50, borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#90ee90', borderColor: 'transparent' }}>
                  50%
                </Text>
                <View style={{ flexDirection: 'row', marginRight: 10 }}>
                  <TouchableOpacity onPress={onChangeQuantity('reduce', item)}>
                    <Ionicons name="md-remove" size={25} color={'black'} />
                  </TouchableOpacity>
                  <Text style={{ fontSize: 20, marginHorizontal: 10 }}>{item?.quantity}</Text>
                  <TouchableOpacity onPress={onChangeQuantity('increase', item)}>
                    <Ionicons name="add-outline" size={25} color={'black'} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <TouchableOpacity onPress={onRemoveItem(item)}>
              <Ionicons name="ios-trash-outline" size={30} color={'black'} />
            </TouchableOpacity>
          </View>
        </View>
      </CartView>
    );
  };


  return (
    <View>
      <FlatList
        style={{ backgroundColor: 'grey' }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id?.toString()}
      // extraData={}
      />
      {data?.length ?
        <TouchableOpacity style={{ marginTop: 10 }} onPress={onRemoveAll}>
          <Text>
            Remove all
        </Text>
        </TouchableOpacity> :
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Text>Nothing here!</Text>
        </View>
      }

    </View>
  )
}

const styles = StyleSheet.create({
  wishlistIcon: {
    marginRight: 5,
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 1
  },

});
