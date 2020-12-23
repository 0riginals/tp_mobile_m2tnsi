import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Components/Home'
import DelivecrousTitle from './Components/DelivecrousTitle';
import { Provider } from 'react-redux'
import Store from './Store/configureStore'

const App = () => {
	const Stack = createStackNavigator()
	return (
		<Provider store={Store}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: {backgroundColor: '#fdf7ef' }}}>
					<Stack.Screen name="Home" component={Home} options={{ headerTitle: () => <DelivecrousTitle /> }} />
					<Stack.Screen name="Mea" component={Home} options={{ headerTitle: () => <DelivecrousTitle  /> }} />
					<Stack.Screen name="ShoppingCart" component={Home} options={{ headerTitle: () => <DelivecrousTitle /> }} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	)
}

export default App