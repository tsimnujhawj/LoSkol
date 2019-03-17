import React, { Component } from 'react'
import { View, Text, Alert } from 'react-native'
import { Input, Button } from 'react-native-elements';

import firebase from 'react-native-firebase'

export default class LoginForm extends Component {
    static navigationOptions = {
        title: 'Login',
    };

    constructor(props)
    {
		super(props);
		this.state = {
            email: "",
            password: ""
		};
		this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    handleLoginSubmit = () =>
    {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
            // user is logged in
            })
            .catch((error) => {
            const { code, message } = error;
            // error
            });
    }
    
    render()
    {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text style={{textAlign: "center", fontSize: 50, margin: 20}}>Login</Text>
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
                        onPress={() => navigate("Register")}
                        buttonStyle={{
                            backgroundColor: "#59C3C3"
                        }}
                    />
            </View>
        )
    }
  }