import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import MeuApp from './components/MeuApp';
import Msg from './components/Msg'
const Teste = createStackNavigator({
  MeuApp,
  Msg
},{

  
   
  defaultNavigationOptions:{
  headerStyle: {backgroundColor: '#6200DE'},
  headerTintColor: "#fff",
  }
 }
 
);
export default createAppContainer(Teste);
