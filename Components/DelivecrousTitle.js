import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Badge } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native'


const DelivecrousTitle = (props) => {
    const count = props.items.length
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Delivecrous</Text>
            <TouchableOpacity style={styles.cart} onPress={() => {navigation.navigate('ShoppingCart')}}>            
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

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(DelivecrousTitle)