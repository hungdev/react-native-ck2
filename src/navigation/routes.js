// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from "react-redux";

import Home from '../screens/Home'
import ProductList from '../screens/ProductList'
import Detail from '../screens/Detail'
import WishList from '../screens/WishList'
import Cart from '../screens/Cart'
import Me from '../screens/Me'
import Login from '../screens/Login'
import Register from '../screens/Register'

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


const homeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
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
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="WishList" component={WishList} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Me" component={Me} />
    </Tab.Navigator>
  )
}

const authStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  )
}


export default function App() {
  const token = useSelector((store) => store.authReducer.token);
  return (
    <NavigationContainer>
      {token ? homeTab() : authStack()}
    </NavigationContainer>
  );
}
