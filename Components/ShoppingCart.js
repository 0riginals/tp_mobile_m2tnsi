import React from 'react'
import { StyleSheet, View, Text } from 'react-native'


const ShoppingCart = () => {
    return(
        <View style={styles.container}>
            <Text>ShoppingCart</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    }
})


export default ShoppingCart