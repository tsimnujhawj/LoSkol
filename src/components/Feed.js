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
					let item = individualPost;
					let itemObject = {
						key: item.key,
						content: item.val().content,
						user: item.val().user,
						date: item.val().timeStamp,
					}
					this.setState({
						isLoaded: true,
						posts: [...this.state.posts, itemObject]
					})
				})
			})
		})
	}

	componentDidMount(){
		this.renderFeedFromFirebase();
	}

	// componentWillUpdate()

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
            // TODO: render each object, need a unique key id, should implement via firebase
            // TODO: re-render page when post is posted, handle in post.js?... pass from post.js as prop...
			let posts = this.state.posts;
			console.log(posts)
			return (
				<View>
					<FlatList
					data = {posts}
					extraData = {posts}
					renderItem = {({item}) =>
						<View style={{borderColor: "red", borderWidth: 1, margin: 5}}>
							<Text>{item.content}</Text>
						</View>
					}
					contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignSelf: "stretch", borderColor: "red"}}
					keyExtractor={(item) => item.key} // TODO: key extractor
					/>
				</View>
			)
		}
	}
}