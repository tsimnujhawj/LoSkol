import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends Component
{
	render()
	{
		return (
		<View style={styles.container}>
			<View style={styles.introContainer}>
				<Text style={styles.introHeader}>LoSkol</Text>
			</View>
			<View style={styles.body}>
				<Text>Body here</Text>
			</View>
		</View>
		);
	}
}

const styles = StyleSheet.create({
container:
{
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#F5FCFF',
},
introHeader:
{
	color: "#fff",
	fontSize: 50
},
introContainer:
{
	flex: 1,
	backgroundColor: "#4F2683",
	justifyContent: "center",
	alignItems: "center",
	alignSelf: "stretch"
},
body:
{
	flex: 1
}
});
