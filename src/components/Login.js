import React, { Component } from 'react'
import { View } from 'react-native'

import LoginForm from './LoginForm'

export default class Login extends Component {

  render() {

    return (
		<View>
			<LoginForm />
		</View>
    )
  }
}

// TODO: deprecate this component