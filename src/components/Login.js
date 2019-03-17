import React, { Component } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'

import LoginForm from './LoginForm'

export default class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {

		};
		this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
		}

	handleLoginSubmit(){
		// TODO: do firebase auth here
	}


  render() {

    return (
		<View>
			{/* TODO: add a background image */}
			<LoginForm />
			<Button
				title="Login"
				containerStyle={{alignSelf: "flex-end", margin: 15}}
				onPress={this.handleLoginSubmit}
				buttonStyle={{
					backgroundColor: "#59C3C3",
					width: 80
				}}
			/>
			<Button
				title="Create An Account"
				containerStyle={{alignSelf: "center", margin: 30}}
				onPress={this.handleLoginSubmit}
				buttonStyle={{
					backgroundColor: "#59C3C3"
				}}
			/>
		</View>
    )
  }
}
