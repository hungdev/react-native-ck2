import React, {
  useEffect, useState

} from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { getProduct } from '../services/Api'
import { getImage } from '../utils'

const productList = Array(10).fill(null).map((e, i) => ({
  _id: i,
  img: 'https://itcafe.vn/wp-content/uploads/2021/01/anh-gai-xinh-4.jpg',
  name: 'T Shirt Women Funny Print',
  heart: i % 2,
  size: 'L',
  price: 10 + i
}))

export default function App({ route, navigation }) {
  const [product, setProduct] = useState()

  useEffect(() => {
    // alert('hello')
    const getApiProduct = async () => {
      const result = await getProduct()
      console.log('result', result)
      setProduct(result.data.data)
    }

    getApiProduct()

  }, [])


  const onMoveToDetail = (data) => () => {
    navigation.navigate('Detail', { detail: data });
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity style={{ width: '45%', }} onPress={onMoveToDetail(item)}>
      <Image
        style={styles.imgStyle}
        // source={{ uri: getImage(item.images?.[0]) }}
        source={{ uri: item.img }}
      />
      <View style={styles.rowPrice}>
        <Text>{item.price}</Text>
        <Ionicons name="heart" size={30} color={item.heart ? 'red' : 'grey'} />
      </View>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
  return (
    <View>
      <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'grey' }}>
        <TouchableOpacity style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>SORT</Text>
          <Ionicons name="chevron-down-outline" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ textAlign: 'center', }}>REFINE</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ textAlign: 'center', marginTop: 15, marginBottom: 20 }}>405 styles</Text>
      <FlatList
        data={productList}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item._id?.toString()}
        columnWrapperStyle={{ justifyContent: 'space-around', marginBottom: 10, flex: 1 }}
        style={{ marginBottom: 100 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  rowPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  imgStyle: {
    height: 300,
    width: 'auto'
  }
});