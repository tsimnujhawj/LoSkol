import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'react-native-firebase'

import MainNavigator from './src/navigation/MainNavigator'
import LoginNavigator from './src/navigation/LoginNavigator'

import styles from './src/assets/styles/Styles'

export default class App extends Component
{
	constructor()
	{
		super();
		this.unsubscriber = null;
		this.state = {
			user: null,
		};
	}
	
	// listen for any user changes (logged in/logged out)
	componentDidMount()
	{
		this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
			this.setState({ user });
		});
	}
	
	// if user logs out, remove them from persistance
	componentWillUnmount()
	{
		if (this.unsubscriber)
		{
			this.unsubscriber();
		}
	}
	
	render()
	{
		// if no user is logged in, send to loginform
		if (!this.state.user)
		{
			return(
				<View style={styles.body}>
					<LoginNavigator/>
				</View>
			)
		}
	
		//if user is logged in, send to main page
		return (
			<MainNavigator />
		);
	}
}