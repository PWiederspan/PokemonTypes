import React, {Component, useState} from 'react';
import { StyleSheet, Text, TouchableOpacity,View, FlatList} from 'react-native';
import { or } from 'react-native-reanimated';
import pokemon from '../assets/pokemon_data';

export default function Pokemon({ navigation }) {
    const [pokeData, setPokeData] = useState(pokemon);
    const type = navigation.getParam('type');
    console.log(type)

    const pressHandler = (pokemon) => {
      navigation.push('PokemonDetails');
    }
    return (
      <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.Number}
        data = {pokeData.filter(item => item.Type1.includes(type)||item.Type2.includes(type))}
        renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('PokemonDetails', item)}>
          <Text style={styles.item}>#{item.Number}: {item.Name}</Text>
        </TouchableOpacity>
        )}
      />
      </View>
    )};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EB',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  },
  item:{
    alignSelf: 'stretch',
    marginTop: 24,
    padding: 30,
    backgroundColor: '#e3e2e1',
    fontSize:24,
    textAlign:'center',
    borderRadius: 45,
    overflow: "hidden"
  },
  number:{
    marginTop: 24,
    padding: 30,
    backgroundColor: '#e3e2e1',
    fontSize:20,
    textAlign:'center',
  },

});
