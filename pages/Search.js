import React, {Component, useState} from 'react';
import { StyleSheet, Image, Text, View, Dimensions, Button, TextInput, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';




export default function PokemonSearch ({ navigation }) {
 const [name, setName] = useState("");
 const [type, setType] = useState("");
  
  return(
    <View style={styles.container}>
      <Image source={require('../assets/pokeball.png')} 
                    style={{ width: 200, height: 200 }}/>
      <TextInput 
      autoCapitalize='words'
      placeholder='Eevee, Grass, etc...'
      style={styles.input}
      onChangeText={(val) => setName(val)}/>
      <TouchableOpacity>
      <Text style={styles.button} onPress={() => navigation.navigate("Pokemon", {name})}>
        Search By Name or Type
      </Text>
      </TouchableOpacity>
    </View>
    
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#F6F6EB',
  },
  image: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  button: {
    backgroundColor: '#fe6d6d',
    color: 'white',
    padding: 10,
    overflow: "hidden",
    borderRadius: 15,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 35,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#777',
    borderRadius: 15,
    padding: 8,
    margin: 10,
    width: 300,
  },
  credit: {
    fontSize: 12,    
    textAlign: 'center',
  },
});
