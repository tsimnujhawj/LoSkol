import React, { Component } from 'react'
import { Text, View } from 'react-native'
import firebase from 'react-native-firebase'
import { Input, Button } from 'react-native-elements'

export default class Post extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = {

        }
        this.handleContentSubmit = this.handleContentSubmit.bind(this);
    }

    // TODO: need to add unique ID at each post, integrate into state
    handleContentSubmit = () => {
        const User = firebase.auth().currentUser;
        const {content} = this.state;
        const timestamp = Number(new Date())
        // TODO: manage timestamp differently...
        firebase.database().ref(`posts/${User.uid}`).push({
            content: content,
            user: User.uid,
            timeStamp: new Date(timestamp)
        }).then((data)=>{
            console.log(data)
        }).catch((error)=> {
            console.log(error)
        });
    }

	render() {
		return (
			<View>
				<Input
                placeholder="what's on your mind?..."
                onChangeText={(content) => this.setState({content})}
                value={this.state.content}
                />
                    <Button
                        title="Post"
                        containerStyle={{alignSelf: "flex-end", margin: 15}}
                        onPress={this.handleContentSubmit}
                        buttonStyle={{
                            backgroundColor: "#59C3C3",
                            width: 80
                        }}
                    />
			</View>
		)
	}
}
