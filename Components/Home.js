import React from 'react';
import { StyleSheet, ScrollView, Text, FlatList } from 'react-native';
import meals from '../Data/MealData'
import MealItem from './MealItem'
import { connect } from 'react-redux'


const Home = () => {
    return (
        <ScrollView>
            <Text style={styles.title}>La carte</Text>
            <FlatList
                numColumns={2}
                style={styles.list}
                data={meals}
                renderItem={({item}) => <MealItem meal={item} />}
                keyExtractor={item => item.id}
            />
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    title: {
        padding: 12,
        fontSize: 22
    }
})

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(Home)