import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'react-native-firebase'

import LoginForm from './src/components/Login'

import styles from './src/assets/styles/Styles'

export default class App extends Component
{
	// render()
	// {
	// 	return(
	// 		<View style={styles.container}>
	// 			<Banner />
	// 			<MainNavigator />
	// 		</View>
	// 	)
	// }

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
					<LoginForm/>
				</View>
			)
		}
	
		//if user is logged in, send to main page
		return (
			<View>
				<Text>Welcome to my awesome app {this.state.user.email}!</Text>
			</View>
		);
	}
}