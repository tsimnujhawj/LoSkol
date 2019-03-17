import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'react-native-firebase'

import Login from './src/components/Login'

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

	constructor() {
		super();
		this.unsubscriber = null;
		this.state = {
		  user: null,
		};
	  }
	
	  /**
	   * Listen for any auth state changes and update component state
	   */
	  componentDidMount() {
		this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
		  this.setState({ user });
		});
	  }
	
	  componentWillUnmount() {
		if (this.unsubscriber) {
		  this.unsubscriber();
		}
	  }
	
	  render() {
		if (!this.state.user) {
		  return(
			<View style={styles.body}>
				<Login/>
			</View>
		  )
		}
	
		return (
		  <View>
			<Text>Welcome to my awesome app {this.state.user.email}!</Text>
		  </View>
		);
	  }
}