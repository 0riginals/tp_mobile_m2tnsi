import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Components/Home'
import DelivecrousTitle from './Components/DelivecrousTitle'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
import ShoppingCart from './Components/ShoppingCart'
import MealDetail from './Components/MealDetail'


const App = () => {
	const Stack = createStackNavigator()
	return (
		<Provider store={Store}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: {backgroundColor: '#fdf7ef' }}}>
					<Stack.Screen name="Home" component={Home} options={{ headerTitle: () => <DelivecrousTitle /> }} />
					<Stack.Screen name="MealDetail" component={MealDetail} options={{ headerTitle: () => <DelivecrousTitle  /> }} />
					<Stack.Screen name="ShoppingCart" component={ShoppingCart} options={{ headerTitle: () => <DelivecrousTitle /> }} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	)
}


export default App