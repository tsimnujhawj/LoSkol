import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from '../assets/styles/Styles'

export default class Banner extends React.Component {
  render() {
    return (
    <View style={styles.bannerContainer}>
        <Text style={styles.bannerText}>LoSkol</Text>
    </View>
    )
  }
}
