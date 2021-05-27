import React from 'react'
import { View, Text } from 'react-native'
import thunk from "redux-thunk";
import MainAppRoutes from './src/navigation/routes'

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import allReducer from './src/reducers'

let store = createStore(allReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <MainAppRoutes />
    </Provider>
  )
}
