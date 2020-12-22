import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Home({navigation}) {
    
    return (
        <View style={styles.container}>
        <Text style={styles.title}>La carte</Text>
        <Button title="Press Me" onPress={() => {navigation.navigate('Details')}} />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontWeight: 'bold',
        padding: 8,
        fontSize: 22
    }
})