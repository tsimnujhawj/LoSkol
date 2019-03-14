import React, { Component } from 'react'
import { Text, View } from 'react-native'

// navigation import
import {
	createStackNavigator,
	createBottomTabNavigator,
	createAppContainer,
	} from 'react-navigation';

export default class MainNavigator extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
