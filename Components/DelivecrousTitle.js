import React, { useState } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Badge } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'

const DelivecrousTitle = (props) => {
    let [count, setCount] = useState(0)
    // can't use props here since props are related to component
    // state however can be accessed from everywhere in shape of : getter, setter
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Delivecrous</Text>
            <TouchableOpacity style={styles.cart} onPress={() => {setCount(count+1)}}>            
                <Image source={require('../img/shopping_cart.png')} style={styles.img} />                
                <Badge value={ count } status="error" containerStyle={styles.badge} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 35,
        height: 35,
    },
    title: {
        fontSize: 22,
        flex: 2
    },
    badge: {
        position: 'absolute', 
        right: 1
    }
})

export default DelivecrousTitle