import React, {Component, useState} from 'react';
import { StyleSheet, Text, TouchableOpacity,View, FlatList} from 'react-native';
import pokemon from '../assets/pokemon_data';


export default function Pokemon({ navigation }) {
    const [pokeData, setPokeData] = useState(pokemon);
    const name = navigation.getParam('name');
    const type = navigation.getParam('type');
    console.log(name)

    const pressHandler = (pokemon) => {
      navigation.push('PokemonDetails');
    }

    return (
      <View style={styles.container}>
        
      <FlatList
        keyExtractor={(item) => item.Number.toString()}
        data =  {pokeData.filter(item => item.Name.includes(name)||item.Type1.includes(name)||item.Type2.includes(name))}
        renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('PokemonDetails', item)}>
          <Text style={(item.Type1==="Water") ? types.water :
            (item.Type1==="Fire") ? types.fire : 
            (item.Type1==="Grass") ? types.grass : 
            (item.Type1==="Ice") ? types.ice : 
            (item.Type1==="Electric") ? types.electric : 
            (item.Type1==="Fighting") ? types.fighting : 
            (item.Type1==="Poison") ? types.poison : 
            (item.Type1==="Ghost") ? types.ghost : 
            (item.Type1==="Steel") ? types.steel : 
            (item.Type1==="Rock") ? types.rock : 
            (item.Type1==="Psychic") ? types.psychic : 
            (item.Type1==="Ground") ? types.ground : 
            (item.Type1==="Flying") ? types.flying : 
            (item.Type1==="Dark") ? types.dark : 
            (item.Type1==="Dragon") ? types.dragon : 
            (item.Type1==="Fairy") ? types.fairy : 
            (item.Type1==="Bug") ? types.bug : styles.item
          }>#{item.Number}: {item.Name}</Text>
        </TouchableOpacity>
        )}
      />
      </View>
    )};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  },
  item:{
    alignSelf: 'stretch',
    marginTop: 24,
    padding: 30,
    backgroundColor: '#e6e6e6',
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
const types = StyleSheet.create({
  grass:{
    alignSelf: 'stretch',
    marginTop: 24,
    padding: 30,
    backgroundColor: '#b3f2ba',
    fontSize:24,
    textAlign:'center',
    borderRadius: 45,
    overflow: "hidden"
  },
  water:{
    alignSelf: 'stretch',
    marginTop: 24,
    padding: 30,
    backgroundColor: '#90e6f5',
    fontSize:24,
    textAlign:'center',
    borderRadius: 45,
    overflow: "hidden"
  },
  fire:{
    alignSelf: 'stretch',
    marginTop: 24,
    padding: 30,
    backgroundColor: '#f5cd9d',
    fontSize:24,
    textAlign:'center',
    borderRadius: 45,
    overflow: "hidden"
  },
  electric:{
    alignSelf: 'stretch',
    marginTop: 24,
    padding: 30,
    backgroundColor: '#feffad',
    fontSize:24,
    textAlign:'center',
    borderRadius: 45,
    overflow: "hidden"
  },
  fighting:{
    alignSelf: 'stretch',
    marginTop: 24,
    padding: 30,
    backgroundColor: '#fac2b9',
    fontSize:24,
    textAlign:'center',
    borderRadius: 45,
    overflow: "hidden"
  },
  ice:{
    alignSelf: 'stretch',
    marginTop: 24,
    padding: 30,
    backgroundColor: '#bdfffb',
    fontSize:24,
    textAlign:'center',
    borderRadius: 45,
    overflow: "hidden"
  },
  bug:{
    alignSelf: 'stretch',
    marginTop: 24,
    padding: 30,
    backgroundColor: '#75d998',
    fontSize:24,
    textAlign:'center',
    borderRadius: 45,
    overflow: "hidden"
  },
  poison:{
    alignSelf: 'stretch',
    marginTop: 24,
    padding: 30,
    backgroundColor: '#c6a1d6',
    fontSize:24,
    textAlign:'center',
    borderRadius: 45,
    overflow: "hidden"
  },
  ghost:{
    alignSelf: 'stretch',
    marginTop: 24,
    padding: 30,
    backgroundColor: '#9e88d1',
    fontSize:24,
    textAlign:'center',
    borderRadius: 45,
    overflow: "hidden"
  },
  steel:{
    alignSelf: 'stretch',
    marginTop: 24,
    padding: 30,
    backgroundColor: '#d6d6d6',
    fontSize:24,
    textAlign:'center',
    borderRadius: 45,
    overflow: "hidden"
  },
  rock:{
    alignSelf: 'stretch',
    marginTop: 24,
    padding: 30,
    backgroundColor: '#a8a8a8',
    fontSize:24,
    textAlign:'center',
    borderRadius: 45,
    overflow: "hidden"
  },
  psychic:{
    alignSelf: 'stretch',
    marginTop: 24,
    padding: 30,
    backgroundColor: '#d5a5d9',
    fontSize:24,
    textAlign:'center',
    borderRadius: 45,
    overflow: "hidden"
  },
  ground:{
    alignSelf: 'stretch',
    marginTop: 24,
    padding: 30,
    backgroundColor: '#c7bd93',
    fontSize:24,
    textAlign:'center',
    borderRadius: 45,
    overflow: "hidden"
  },
  flying:{
    alignSelf: 'stretch',
    marginTop: 24,
    padding: 30,
    backgroundColor: '#d9e3fc',
    fontSize:24,
    textAlign:'center',
    borderRadius: 45,
    overflow: "hidden"
  },
  dark:{
    alignSelf: 'stretch',
    marginTop: 24,
    padding: 30,
    backgroundColor: '#636d85',
    fontSize:24,
    textAlign:'center',
    borderRadius: 45,
    overflow: "hidden"
  },
  dragon:{
    alignSelf: 'stretch',
    marginTop: 24,
    padding: 30,
    backgroundColor: '#d98fb9',
    fontSize:24,
    textAlign:'center',
    borderRadius: 45,
    overflow: "hidden"
  },
  fairy:{
    alignSelf: 'stretch',
    marginTop: 24,
    padding: 30,
    backgroundColor: '#f7dcec',
    fontSize:24,
    textAlign:'center',
    borderRadius: 45,
    overflow: "hidden"
  },
});