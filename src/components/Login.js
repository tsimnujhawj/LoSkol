import React, { Component } from 'react'
import { View } from 'react-native'

import LoginForm from './LoginForm'

export default class Login extends Component {

  render() {

    return (
		<View>
			{/* TODO: add a background image */}
			<LoginForm />

		</View>
    )
  }
}

// deprecate this component