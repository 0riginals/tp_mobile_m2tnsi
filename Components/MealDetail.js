import React from 'react'
import { View, Image, Text, Switch, StyleSheet } from 'react-native'
import { connect } from 'react-redux'


const MealDetail = (props) => {
    const meal = props.route.params.meal

    const check = (meal) => {
        return props.items.includes(meal)
    }

    const toggleCheck = () => {
        const action = { type: 'TOGGLE_ITEM', value: meal }
        props.dispatch(action)
    }

    return (
        <View style={styles.container}>
            <Image source={meal.image} style={styles.image} />
            <View style={styles.title_container}>
                <Text style={styles.title}>{meal.title}</Text>
                <Text style={styles.price}>{meal.price} €</Text>
            </View>
            <Text style={styles.description}>{meal.description}</Text>
            <View style={styles.title_container}>
                <Text>Dans le panier ?</Text>
                <Switch
                    trackColor={{ false: '#767577', true: 'green'}}
                    thumbColor={check(meal) ? '#f4f3f4' : '#f4f3f4'}
                    ios_backgroundColor='#3e3e3e'
                    onValueChange={toggleCheck}
                    value={check(meal)}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        alignSelf: 'center',
        marginBottom: 8,
        marginTop: 8
    }, 
    title_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
    },
    description: {
        margin: 5
    },
    title: {
        fontWeight: 'bold'
    }
}) 


const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}


export default connect(mapStateToProps)(MealDetail)