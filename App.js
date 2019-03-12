import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
import {
	createSwitchNavigator,
	createAppContainer,
	createDrawerNavigator,
	createBottomTabNavigator,
	createStackNavigator,
} from 'react-navigation'

class App extends Component {
	render() {
	  return (
		<AppContainer />
	  )
	}
  }
  export default App;

class Welcome extends Component {
  render() {
	return (
	  <View style={styles.container}>
		<Text> Home </Text>
		<Button title="Enter" onPress={()=> this.props.navigation.navigate("Dashboard")} />
	  </View>
	)
  }
}

class Dashboard extends Component {
	render() {
	  return (
		<View style={styles.container}>
		  <Text> Dashboard </Text>
		</View>
	  )
	}
  }

  class Feed extends Component {
	render() {
	  return (
		<View style={styles.container}>
		  <Text> Feed </Text>
		</View>
	  )
	}
  }

  class Profile extends Component {
	render() {
	  return (
		<View style={styles.container}>
		  <Text> Profile </Text>
		</View>
	  )
	}
  }

  class Settings extends Component {
	render() {
	  return (
		<View style={styles.container}>
		  <Text> Settings </Text>
		</View>
	  )
	}
  }

const TabNavigator = createBottomTabNavigator({
	Feed,
	Profile,
	Settings
},
{
	navigationOptions: ({navigation})=>
	{
		const {routeName} = navigation.state.routes[navigation.state.index]
		return {
			headerTitle: routeName
		}
	}
})

const StackNavigator = createStackNavigator({
	TabNavigator: TabNavigator
},
{
	defaultNavigationOptions: ({navigation}) => {
		return {
			headerLeft: (
				<Icon
					style={{ paddingLeft: 10 }}
					onPress={()=> navigation.openDrawer()}
					name="md-menu"
					size={30}
				/>
			)
		}
	}
}
)

const AppDrawerNavigator = createDrawerNavigator({
	Dashboard: { screen: StackNavigator }
})

const AppSwitchNavigator = createSwitchNavigator({
	Welcome: { screen: Welcome },
	Dashboard: { screen: AppDrawerNavigator }
})

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
container:
{
	flex: 1,
	alignItems: "center",
	justifyContent: "center",
}
})
