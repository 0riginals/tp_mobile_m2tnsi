import React from 'react'
import { View, StyleSheet, Text, Image, Switch, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native'


const MealItem = (props) => {  

    const check = (meal) => {
        return props.items.includes(meal)
    }

    const toggleCheck = () => {
        const action = { type:'TOGGLE_ITEM', value: props.meal }
        props.dispatch(action)
    }

    const navigation = useNavigation()

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('MealDetail', { meal: props.meal })}>        
            <Image source={props.meal.image} style={styles.image} />
            <View style={styles.title_container}>
                <Text style={styles.title}>{props.meal.title}</Text>
                <Text style={styles.price}>{props.meal.price} €</Text>
            </View>
            <Text style={styles.description}>{props.meal.description}</Text>
            <View style={styles.title_container}>
                <Text>Dans le panier ?</Text>
                <Switch
                    trackColor={{ false: '#767577', true: 'green'}}
                    thumbColor={check(props.meal) ? '#f4f3f4' : '#f4f3f4'}
                    ios_backgroundColor='#3e3e3e'
                    onValueChange={toggleCheck}
                    value={check(props.meal)}
                />
            </View>
        </TouchableOpacity>
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
        fontWeight: 'bold'
    },
    price: {

    },
    description: {
        margin: 5
    },
    title_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center'
    }
})


const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}


export default connect(mapStateToProps)(MealItem)