//The Color combination of the app is #7b02de and #fff
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Farhan Design the Login Signup Here</Text>
        <Text>Ok, i'm ready to design Login Signup page Here.</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
