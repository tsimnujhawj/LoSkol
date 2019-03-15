import React, {Component} from 'react';
import {View} from 'react-native';

import styles from './src/assets/styles/Styles.js'
import MainNavigator from './src/navigation/MainNavigator'
import Banner from './src/components/Banner'

export default class App extends Component
{
	render()
	{
		return(
			<View style={styles.container}>
				<Banner />
				<MainNavigator />
			</View>
		)
	}
}