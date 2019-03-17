import React, { Component } from 'react'
import { View } from 'react-native'
import { Input, Button } from 'react-native-elements';

import firebase from 'react-native-firebase'

export default class LoginForm extends Component {
    render() {
      return (
          <View>
            <Input
            placeholder='Email'
            leftIcon={{ type: 'font-awesome', name: 'envelope', color: "#F45B69" }}
            />
            <Input
            placeholder='Password'
            leftIcon={{ type: 'font-awesome', name: 'lock', color: "#F45B69" }}
            />
          </View>
      )
    }
  }