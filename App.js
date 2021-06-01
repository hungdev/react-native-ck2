import React from 'react'
import { View, Text } from 'react-native'
import thunk from "redux-thunk";
import MainAppRoutes from './src/navigation/routes'

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import allReducer from './src/reducers'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, allReducer)

let store = createStore(persistedReducer, applyMiddleware(thunk));

let persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainAppRoutes />
      </PersistGate>
    </Provider>
  )
}
