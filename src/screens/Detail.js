import React, { useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from "react-redux";
import { getImage } from '../utils';
import { getProductDetailApi } from '../reducers/productReducer'

const sizes = ['S', "M", "L", 'XL', 'XXL']
export default function DetailScreen({ route, navigation }) {
  const dispatch = useDispatch();
  const { detail } = route.params;

  const productDetail = useSelector((store) => store.productReducer.productDetail);

  useEffect(() => {
    dispatch(getProductDetailApi(detail?.id));
  }, [])

  // const onAddCart = () => dispatch({ type: 'ADD_QUANTITY', data: item })
  const onAddCart = () => {
    dispatch({ type: 'ADD_CART', detail: detail })
  }
  return (
    <View>
      <TouchableOpacity>
        <Ionicons name="heart" size={30} color={'grey'}
          style={{ position: 'absolute', top: 20, right: 20, }}
        />
      </TouchableOpacity>
      {/* <Image source={{ uri: getImage(detail?.images?.[0]) }}
        style={{ width: '100%', height: 360, resizeMode: 'contain' }} /> */}
      <Image source={{ uri: productDetail?.img }}
        style={{ width: '100%', height: 360, resizeMode: 'contain' }} />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{productDetail?.name}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <Text style={{
            marginRight: 5,
            fontWeight: 'bold'
          }}>{productDetail?.price}</Text>
          <Text style={{ textDecorationLine: 'line-through', color: 'grey' }}>1000k</Text>
          <Text style={{ borderWidth: 1, padding: 5, marginLeft: 10, borderRadius: 5, backgroundColor: '#90ee90', borderColor: 'transparent' }}>
            50%
          </Text>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          paddingHorizontal: 40,
          marginTop: 10
        }}>
          {/* {sizes.map((e, i) => {
            const isChecked = e === detail?.size?.[0]
            return (
              <TouchableOpacity key={i}
                style={{
                  borderRadius: 20, backgroundColor: isChecked ? 'grey' : 'white',
                  borderWidth: 1, padding: 2, height: 40, width: 40, justifyContent: 'center', alignItems: 'center'
                }}
              >
                <Text style={{ fontSize: 10 }}>{e}</Text>
              </TouchableOpacity>
            )
          })} */}
        </View>
        <TouchableOpacity
          onPress={onAddCart}
          style={{
            backgroundColor: '#FF5254',
            marginTop: 15, width: '60%', borderWidth: 1,
            borderRadius: 20, paddingVertical: 12,
            borderColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>ADD TO BAG</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}
