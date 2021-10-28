import { StatusBar} from 'expo-status-bar';
import React, {Component, useState} from 'react';
import { StyleSheet, Text, TouchableOpacity,View, ScrollView , SafeAreaView, Button, TextInput, FlatList} from 'react-native';
import { LongPressGestureHandler } from 'react-native-gesture-handler';
import pokemon from './assets/pokemon_data'
import Navigator from './routes/homestack'


export default function App() {
  // Direct user to the homestack page which allows the user to navigate between
  // pages in the app
  return(
    <Navigator/>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  item:{
    marginTop: 24,
    padding: 30,
    backgroundColor: '#e3e2e1',
    fontSize:24,
    textAlign:'center',

  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  }
});
