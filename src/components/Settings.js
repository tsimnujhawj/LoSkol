import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'
import firebase from "react-native-firebase"

export default class Settings extends Component {

    logOutUser = () => {
        firebase.auth().signOut();
    }

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
                            <Text>{User.email}</Text>
                        </View>
                        <View style={{margin: 15}}>
                            <Text>Change profile picture</Text>
                            <Text>Change display name</Text>
                            <Text>Change password</Text>
                            <Text>Close account</Text>
                        </View>
                </View>
                        <Button
                            title="Logout"
                            onPress={this.logOutUser}
                            containerStyle={{alignSelf: "center", margin: 10}}
                            buttonStyle={{
                                backgroundColor: "#59C3C3",
                                width: 75,
                                height: 30
                            }}
                        />
            </View>
        )
    }
}
