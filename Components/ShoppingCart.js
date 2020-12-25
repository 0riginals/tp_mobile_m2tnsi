import React from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import DetailShop from './DetailShop'


const ShoppingCart = (props) => {
    const meals = props.items

    const result = (meals) => {
        let result = 0
        for (let i = 0; i < meals.length; i++) {
            result += meals[i].price
        }
        return result.toFixed(2)
    }

    const buy = () => {
        if(props.items.length < 1)
            alert("Pas de produits, pas de plaisir, pas de plaisir pas de commande :'(")
        else {
            const action = { type: 'BUY_PRODUCTS' }
            props.dispatch(action)
            alert("Merci pour la commande ! :d")
        }
    }

    return(
        <ScrollView style={styles.spaced}>
            <Text style={styles.title}>Panier</Text>
            <FlatList
                data={meals}
                renderItem={({item}) => <DetailShop meal={item} />}
                keyExtractor={item => item.id}
            />
            <Text>Total: {result(meals)} €</Text>
            <Text style={{ marginTop: 12}}>Où veux-tu te faire Livrer ?</Text>
            <Text style={{ marginBottom: 12}}>En salle de TD ?</Text>
            <TextInput placeholder="Rue" />
            <TextInput placeholder="Ville" />
            <TextInput placeholder="Code postal" />
            <Button title="Passer commande" onPress={buy}></Button>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    spaced: {
        margin: 12
    },
    title: {
        fontSize: 22,
        marginBottom: 12
    }
})


const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}


export default connect(mapStateToProps)(ShoppingCart)