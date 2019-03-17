import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Input, Button } from 'react-native-elements';

import firebase from 'react-native-firebase'

export default class RegisterForm extends Component {

    constructor(props)
    {
		super(props);
		this.state = {

		};
		this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    }

    handleRegisterSubmit = () =>
    {
        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
            // If you need to do anything with the user, do it here
            // The user will be logged in automatically by the
            // `onAuthStateChanged` listener we set up in App.js earlier
            })
            .catch((error) => {
            const { code, message } = error;
            // For details of error codes, see the docs
            // The message contains the default Firebase string
            // representation of the error
            });
    }
    
    render()
    {
      return (
            <View>
                <Text style={{textAlign: "center", fontSize: 50, margin: 20}}>Create An Account</Text>
                <Input
                placeholder='Email'
                leftIcon={{ type: 'font-awesome', name: 'envelope', color: "#F45B69" }}
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
                />
                <Input
                placeholder='Password'
                leftIcon={{ type: 'font-awesome', name: 'lock', color: "#F45B69" }}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                />
                    <Button
                        title="Register"
                        containerStyle={{alignSelf: "flex-end", margin: 15}}
                        onPress={this.handleRegisterSubmit}
                        buttonStyle={{
                            backgroundColor: "#59C3C3",
                            width: 80
                        }}
                    />
                    <Button
                        title="Login Instead"
                        containerStyle={{alignSelf: "center", margin: 30}}
                        onPress={() => this.props.navigation.navigate("LoginForm")}
                        buttonStyle={{
                            backgroundColor: "#59C3C3"
                        }}
                    />
          </View>
      )
    }
  }