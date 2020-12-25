import React from 'react'
import { StyleSheet, View, Text, Image, Switch } from 'react-native'
import { connect } from 'react-redux'


const DetailShop = (props) => {

    const check = (meal) => {
        return props.items.includes(meal)
    }

    const toggleCheck = () => {
        const action = { type: 'TOGGLE_ITEM', value: props.meal }
        props.dispatch(action)
    }

    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image source={props.meal.image} />
            </View>
            <View>
                <Text style={styles.title}>{props.meal.title}</Text>
                <Text style={styles.price}>{props.meal.price} €</Text>
            </View>
            <View>
                <Text style={styles.description}>{props.meal.description}</Text>
                <Switch
                    trackColor={{ false: '#767577', true: 'green'}}
                    thumbColor={check(props.meal) ? '#f4f3f4' : '#f4f3f4'}
                    ios_backgroundColor='#3e3e3e'
                    onValueChange={toggleCheck}
                    value={check(props.meal)} 
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 16,
    },
    image: {
        alignSelf: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    title: {
        flex: 1
    },
    price: {
    },
    description: {
    }
})


const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}


export default connect(mapStateToProps)(DetailShop)