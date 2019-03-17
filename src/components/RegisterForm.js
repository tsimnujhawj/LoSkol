import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Input, Button } from 'react-native-elements';

import firebase from 'react-native-firebase'

export default class RegisterForm extends Component {
    static navigationOptions = {
        title: 'Register',
    };

    constructor(props)
    {
		super(props);
		this.state = {
            user: "",
            password: ""
		};
		this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    }

    handleRegisterSubmit = () =>
    {
        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
            // user has been created
            })
            .catch((error) => {
            const { code, message } = error;
            // error in creating user
            <Text>Invalid email/password</Text>
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
                        onPress={() => this.props.navigation.navigate("Login")}
                        buttonStyle={{
                            backgroundColor: "#59C3C3"
                        }}
                    />
          </View>
      )
    }
  }