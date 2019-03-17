import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import firebase from "react-native-firebase"

export default class Profile extends Component {

    logOutUser = () => {
        firebase.auth().signOut();
    }

    render()
    {
        return (
            <View>
                <Button
                title="Logout"
                onPress={this.logOutUser}
                />
            </View>
        )
    }
}
