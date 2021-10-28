import React from 'react';
import { StyleSheet, Image, Text, View, Dimensions, Button, TextInput, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

export default function credit () {
    return (
        <View style={styles.container}>
            <Text>Pokeball icon by Nikita Golubev</Text>
            <Text>https://www.flaticon.com/authors/nikita-golubev</Text>
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
})