import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// const DATA = [
//   {
//     id: 1,
//     photo: 'https://anhdepblog.com/wp-content/uploads/2020/09/anh-gai-xinh-facebook-21.jpg',
//     name: 'ao 2 day',
//     price: '2000$',
//     star: 4
//   }
// ]
const DATA = Array(10).fill('').map((e, i) => ({
  id: i + 1,
  photo: 'https://anhdepblog.com/wp-content/uploads/2020/09/anh-gai-xinh-facebook-21.jpg',
  name: `ao 2 day ${i + 1}`,
  price: '2000$',
  heart: i % 2 === 0
}))

export default function App() {
  const renderItem = ({ item }) => (
    <View style={{ width: '45%', }}>
      <Image
        style={styles.imgStyle}
        source={{ uri: item.photo, }}
      />
      <View style={styles.rowPrice}>
        <Text>{item.price}</Text>
        <Ionicons name="heart" size={30} color={item.heart ? 'red' : 'grey'} />
      </View>
      <Text>{item.name}</Text>
    </View>
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
        data={DATA}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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