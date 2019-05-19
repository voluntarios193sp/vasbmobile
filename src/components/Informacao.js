import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import LogoTitle from "./genericos/LogoTitle";

export default class Informacao extends Component {

  static navigationOptions = {
    headerTitle: "CORPO DE BOMBEIROS",
    headerRight: <LogoTitle />
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Informacao</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    color: "white"
  }
});