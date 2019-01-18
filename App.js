import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/Routes';

export default class App extends React.Component {
  render() {
    return ( 
      <View style={StyleSheet.absoluteFill}>
         <Routes />
         </View>
    );
  }
}
