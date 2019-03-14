import React, {Component} from 'react';
import {Text, View} from 'react-native';

import styles from './src/assets/styles/Styles.js'
import MainNavigator from './src/navigation/MainNavigator'
import NewsFeed from './src/components/NewsFeed'
import Banner from './src/components/Banner'

export default class App extends Component
{

	render()
	{
		return(
			<View style={styles.container}>
				<Banner />
					<View style={styles.body}>
						<NewsFeed />
					</View>
				<MainNavigator />
			</View>
		)
	}
}