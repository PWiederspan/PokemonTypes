import React, {Component, useState} from 'react';
import { StyleSheet, Text, TouchableOpacity,View, ScrollView, Image} from 'react-native';

function makeList(arr) {
  let list = []
  for (const i of arr) {
      list.push({i})
  }
  return(
    list
  )
}



export default function PokemonDetails({ navigation }) {
  // Populate each pokemon's type information
    const details = [
        {
            "Number": navigation.getParam('Number'),
            "Name": navigation.getParam('Name'),
            "Type1": navigation.getParam('Type1'),
            "Type2": navigation.getParam('Type2'),
            "Strong Against": navigation.getParam('Strong Against'),
            "Weak Against": navigation.getParam('Weak Against'),
            "No Effect Against": navigation.getParam('No Effect Against'),
            "Resistant To": navigation.getParam('Resistant To'),
            "Weak To": navigation.getParam('Weak To'),
            "No Effect From": navigation.getParam('No Effect From'),
          }
    ];

  console.log(navigation.getParam('Strong Against'))
  return(
    <ScrollView fadingEdgeLength={100}>
    // Populate view with the pokemon's type advantages / weaknessess
    
        <View style={styles.container }>
                <Image source={require('../assets/pokeball.png')}
                    style={{ width: 70, height: 70 }}/>
                <Text style={styles.name}>{navigation.getParam('Name')}</Text>
                <Text style={styles.number}>#{navigation.getParam('Number')}</Text>
                <View style={styles.typebox}>
                <Text style={styles.type}> {navigation.getParam('Type1')}</Text><Text style={styles.type}>/</Text><Text style={styles.type}>{navigation.getParam('Type2')}</Text>
                </View>
            <View style={styles.offense}>
                <Text style={styles.title}>Offensive</Text>
                <Text style={styles.header}> Strong Against:</Text>
                <Text style={effect.strongA}> {navigation.getParam('Strong Against')}</Text>
                <Text style={styles.header}> Weak Against:</Text>
                <Text style={effect.weakgA}> {navigation.getParam('Weak Against')}</Text>
                <Text style={styles.header}> No Effect Against:</Text>
                <Text style={effect.noA}> {navigation.getParam('No Effect Against')}</Text>
            </View>
            <View style={styles.defense}>
            <Text style={styles.title}>Defensive</Text>
                <Text style={styles.header}> Resistant To:</Text>
                <Text style={effect.resistantT}> {navigation.getParam('Resistant To')}</Text>
                <Text style={styles.header}> Weak To:</Text>
                <Text style={effect.weakT}> {navigation.getParam('Weak To')}</Text>
                <Text style={styles.header}> No Effect From:</Text>
                <Text style={effect.noT}> {navigation.getParam('No Effect From')}</Text>
            </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
  },
  offense: {
    borderColor: '#363434',
    borderStyle: "solid",
    borderWidth: 3,
    alignSelf: "stretch",
    marginBottom: 10,
    borderRadius:25,
  },
  defense: {
    borderColor: '#363434',
    borderStyle: "solid",
    borderWidth: 3,
    alignSelf: "stretch",
    borderRadius:25,
  },
  title: {
    color: '#363434',
    margin:15,
    fontSize:30,
    textAlign:'center',
    fontWeight: 'bold',
    overflow: 'hidden',
    textDecorationLine: 'underline',
  },
  header: {
    color: '#363434',
    margin:15,
    fontSize:24,
    textAlign:'center',
    fontWeight: 'bold',
    borderRadius: 15,
    backgroundColor: '#e3e2e1',
    overflow: 'hidden'
  },
  name:{
    color: '#363434',
    padding: 2,
    fontSize:50,
    fontWeight: 'bold',
    textAlign:'center',
    textDecorationLine: "underline",
    alignItems: 'center',
    justifyContent: 'center'
  },
  number:{
    color: '#363434',
    marginTop: 10,
    padding: 2,
    fontSize:30,
    fontWeight: 'bold',
    textAlign:'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  type:{
    color: '#363434',
    margin: 5,
    padding: 2,
    fontSize:30,
    fontWeight: 'bold',
    textAlign:'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  typebox: {
    flexDirection: 'row',
    backgroundColor: '#e3e2e1',
    borderRadius: 25,
    overflow: 'hidden',
    margin: 10,
  },
})

const effect = StyleSheet.create({
  strongA: {
    padding: 2,
    backgroundColor:"#82d190",
    fontWeight: 'bold',
    marginLeft: 30,
    marginRight: 30,
    fontSize: 18,
    textAlign: "center",
    borderRadius: 15,
    overflow: 'hidden',
  },
  weakgA: {
    padding: 2,
    backgroundColor:"#93eda8",
    fontWeight: 'bold',
    marginLeft: 30,
    marginRight: 30,
    fontSize: 18,
    textAlign: "center",
    borderRadius: 15,
    overflow: 'hidden',
  },
  noA: {
    padding: 2,
    backgroundColor:"#c7f9cc",
    fontWeight: 'bold',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 15,
    fontSize: 18,
    textAlign: "center",
    borderRadius: 15,
    overflow: 'hidden',
  },
  resistantT: {
    padding: 2,
    backgroundColor:"#ff808c",
    fontWeight: 'bold',
    marginLeft: 30,
    marginRight: 30,
    fontSize: 18,
    textAlign: "center",
    borderRadius: 15,
    overflow: 'hidden',
  },
  weakT: {
    padding: 2,
    backgroundColor:"#fdaaaa",
    fontWeight: 'bold',
    marginLeft: 30,
    marginRight: 30,
    fontSize: 18,
    textAlign: "center",
    borderRadius: 15,
    overflow: 'hidden',
  },
  noT: {
    padding: 2,
    backgroundColor:"#fde0e0",
    fontWeight: 'bold',
    marginLeft: 30,
    marginRight: 30,
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center",
    borderRadius: 15,
    overflow: 'hidden',
  },
})
