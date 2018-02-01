/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import TabBarNavigation from './tabBar/view/TabBarNavigation'
import configureStore from './configureStore'

let store = configureStore();

const App = () => {
  return (    
    <Provider store={store}>
      <View style={{flex:1}}>
          <TabBarNavigation />
      </View> 
    </Provider>
  )
} 

export default App;

