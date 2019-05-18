import React, { Component } from "react";
import { StyleSheet, Image, View } from "react-native";

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../images/logo1x.png')}  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  },
  logo: {
    width: 250,
    height: 250
  }
});