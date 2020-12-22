import React from 'react';
import { StyleSheet, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Components/Home'
import Details from './Components/Details'
import DelivecrousTitle from './Components/DelivecrousTitle';

const Stack = createStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: {backgroundColor: '#fdf7ef' }}}>
				<Stack.Screen name="Home" component={Home} options={{ headerTitle: props => <DelivecrousTitle {...props} /> }} />
				<Stack.Screen name="Details" component={Details} options={{ headerTitle: props => <DelivecrousTitle {...props} />}} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
})