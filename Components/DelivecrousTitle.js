import React, {Component} from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Badge } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'


// TODO: Remplacer après
// -- Entete de fichier --
// import { useNavigation } from '@react-navigation/native'
// -- Avant return dans render --
// const navigation = useNavigation
// -- Dans le touchopacity --
// onPress={() => navigation.navigate('ShoppingCart')}

export default class DelivecrousTitle extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            count: 0 
        }
    }

    _increment = () => {
        this.setState(prev => ({ count: prev.count + 1}))
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Delivecrous</Text>
                <TouchableOpacity style={styles.cart} onPress={() => {this._increment()}}>            
                    <Image source={require('../img/shopping_cart.png')} style={styles.img} />                
                    <Badge value={ this.state.count } status="error" containerStyle={styles.badge} />
                </TouchableOpacity>
            </View>
        )}
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