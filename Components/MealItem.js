import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

// TODO: ajouter la cache à cocher

const MealItem = (props) => {  
    return (
        <View style={styles.container}>
            <Image source={props.meal.image} style={styles.image} />
            <View style={styles.title_container}>
                <Text style={styles.title}>{props.meal.title}</Text>
                <Text style={styles.price}>{props.meal.price} €</Text>
            </View>
            <Text style={styles.description}>{props.meal.description}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 15,
    }, 
    image: {
        alignSelf: 'center'
    },
    title: {

    },
    price: {

    },
    description: {

    }
})

export default MealItem