import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, FlatList} from 'react-native';

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
		fetch("https://jsonplaceholder.typicode.com/users",
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
		return(
		<View style={styles.container}>
			<View style={styles.introContainer}>
				<Text style={styles.introHeader}>LoSkol</Text>
			</View>
			<View style={styles.body}>
				<FlatList
					data = {data}
					renderItem = {({item}) => <Text style={styles.textStyle}>{item.name}</Text>}
					keyExtractor={({id}, index) => id.toString()}
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
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#F5FCFF',
},
introHeader:
{
	color: "#fff",
	fontSize: 80,
	fontFamily: "NFL_Minnesota_Vikings"
},
introContainer:
{
	flex: 1,
	backgroundColor: "#4F2683",
	justifyContent: "center",
	alignItems: "center",
	alignSelf: "stretch",
	borderBottomColor: "#FFC62F",
	borderBottomWidth: 5
},
body:
{
	flex: 6,
	backgroundColor: "#fff",
	justifyContent: "center",
	alignItems: "center",
	alignSelf: "stretch",
},
textStyle:
{
	color: "black",
	fontSize: 20
}
});
