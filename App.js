import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, FlatList} from 'react-native';

// navigation import
import {
	createStackNavigator,
	createBottomTabNavigator,
	createAppContainer,
	} from 'react-navigation';

export default class App extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {

		}
	}

	componentDidMount()
	{
		fetch("https://jsonplaceholder.typicode.com/posts",
		{
			method: 'GET',
			headers: {
			  Accept: 'application/json',
			  'Content-Type': 'application/json',
			}
		})
		.then(response => response.json())
		.then(json =>
			{
				this.setState({
					data: json
				})
			}
		)
		.catch(err => { console.log(err) })
	}

	render()
	{
		const data = this.state.data;

		// if data hasn't loaded, display "Loading..."
		if (data === null)
		{
			return(
				<View><Text>Loading...</Text></View>
			)
		}

		// else return the view
		return(
		<View style={styles.container}>
			<View style={styles.bannerContainer}>
				<Text style={styles.bannerText}>LoSkol</Text>
			</View>
			<View style={styles.body}>
				<FlatList
					data = {data}
					renderItem = {({item}) =>
						<View style={styles.articleContainer}>
							<Text style={styles.titleStyle}>{item.id}. {item.title}</Text>
							<Text style={styles.textStyle}>{item.body}</Text>
						</View>
					}
					keyExtractor={({id}, index) => id.toString()}
					contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignSelf: "stretch"}}
				/>
			</View>
		</View>
		);
	}
}

const styles = StyleSheet.create({
container:
{
	flex: 1,
},
bannerText:
{
	color: "#fff",
	fontSize: 60,
	fontFamily: "NFL_Minnesota_Vikings",
	textAlign: "center"
},
bannerContainer:
{
	flex: 1,
	backgroundColor: "#4F2683",
	borderBottomColor: "#FFC62F",
	borderBottomWidth: 5
},
body:
{
	flex: 9,
	backgroundColor: "#fff",
	justifyContent: "center",
	alignItems: "center",
	alignSelf: "stretch",
},
textStyle:
{
	color: "black",
	fontSize: 15,
	marginBottom: 10,
	marginLeft: 10
},
titleStyle:
{
	color: "black",
	fontSize: 15,
	fontWeight: "bold",
	marginLeft: 10,
	marginTop: 10
},
articleContainer:
{
	borderWidth: 1,
	borderColor: "#FFC62F"
}
});
