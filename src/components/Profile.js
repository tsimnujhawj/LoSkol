import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Button } from 'react-native-elements'
import firebase from "react-native-firebase"

export default class Profile extends Component {

    render()
    {
        const User = firebase.auth().currentUser;

        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, alignSelf: "center", margin: 15}}>
                        <Image
                            source={require("../assets/images/sample-profile-picture.png")}
                            style={{width: 160, height: 160}}
                        />
                        <View style={{margin: 15}}>
                            <Text>Display Name</Text>
                        </View>
                </View>
            </View>
        )
    }
}
