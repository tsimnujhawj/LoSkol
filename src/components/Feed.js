import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';

import firebase from 'react-native-firebase'

import styles from '../assets/styles/Styles'

export default class Feed extends Component {


	constructor(props)
	{
		super(props)
		this.state = {
			posts: [],
			isLoaded: false
		}
		// any bindings go here
	}

	renderFeedFromFirebase = () => {
		firebase.database().ref("posts/").on("value", (snapshot)=>{
			snapshot.forEach((item)=>{
				item.forEach((individualPost)=> {
					this.setState({
						post: [...this.state.posts, individualPost._value.content],
						isLoaded: true
					})
					console.log(this.state.post[0])
				})
			})
		})
	}

	componentDidMount(){
		this.renderFeedFromFirebase();
	}

	render()
	{
		if (!this.state.isLoaded)
		{
			return (
				<View>
					<Text>
						Loading...
					</Text>
				</View>
			)
		}
		else
		{
			const posts = this.state.posts;
			return (
				<FlatList
				posts = {posts}
				renderItem = {({item}) =>
					<View>
						<Text>{item}</Text>
					</View>
				}
				keyExtractor={({id}, index) => id.toString()}
			/>
			)
		}
	}
}


// export default class Feed extends Component
// {
// 	constructor(props)
// 	{
// 		super(props);
// 		this.state = {

// 		}
// 	}

// 	componentDidMount()
// 	{
// 		fetch("https://jsonplaceholder.typicode.com/posts",
// 		{
// 			method: 'GET',
// 			headers: {
// 			  Accept: 'application/json',
// 			  'Content-Type': 'application/json',
// 			}
// 		})
// 		.then(response => response.json())
// 		.then(json =>
// 			{
// 				this.setState({
// 					data: json
// 				})
// 			}
// 		)
// 		.catch(err => { console.log(err) })
// 	}

// 	render()
// 	{
// 		const data = this.state.data;

// 		// if data hasn't loaded, display "Loading..."
// 		if (data === null)
// 		{
// 			return(
// 				<View><Text>Loading...</Text></View>
// 			)
// 		}

// 		// else return the view
// 		return(
// 				<FlatList
// 					data = {data}
// 					renderItem = {({item}) =>
// 						<View style={styles.articleContainer}>
// 							<Text style={styles.titleStyle}>{item.id}. {item.title}</Text>
// 							<Text style={styles.textStyle}>{item.body}</Text>
// 						</View>
// 					}
// 					keyExtractor={({id}, index) => id.toString()}
// 					contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignSelf: "stretch"}}
// 				/>
// 		);
// 	}
// }