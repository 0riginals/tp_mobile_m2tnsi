import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

function DelivecrousTitle() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Delivecrous</Text>
            <Image source={require('../img/shopping_cart.png')} style={styles.img} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    img: {
        marginLeft: 8
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22
    }
})

export default DelivecrousTitle