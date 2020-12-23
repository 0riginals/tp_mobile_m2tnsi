import React from 'react';
import { StyleSheet, ScrollView, Text, FlatList, Image } from 'react-native';
import meals from '../Data/MealData'
import MealItem from './MealItem'

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

export default Home