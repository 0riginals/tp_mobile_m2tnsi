import 'react-native-gesture-handler'
import React from 'react';
import { StyleSheet, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Components/Home'
import Details from './Components/Details'

const Stack = createStackNavigator()

export default function App() {
	return (
		<NavigationContainer style={styles.navigation_container}>
			<Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: {backgroundColor: 'yellow' }}}>
				<Stack.Screen name="Home" component={Home} options={{ title: 'Delivecrous' }} />
				<Stack.Screen name="Details" component={Details} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	navigation_container: {
		color: 'yellow'
	}
})