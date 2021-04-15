// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home'
import ProductList from './src/screens/ProductList'
import Detail from './src/screens/Detail'
import WishList from './src/screens/WishList'
import Cart from './src/screens/Cart'
import Me from './src/screens/Me'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Product" component={ProductList} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )
}



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomeStack') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'WishList') {
              iconName = focused ? 'alarm-sharp' : 'alarm-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'airplane-sharp' : 'airplane-outline';
            } else if (route.name === 'Me') {
              iconName = focused ? 'airplane-sharp' : 'airplane-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="WishList" component={WishList} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Me" component={Me} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
