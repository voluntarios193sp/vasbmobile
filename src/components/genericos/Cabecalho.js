import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Cabecalho extends Component {
  render() {
    return (
      <View style={styles.titleTop}>
        <Text style={styles.titleTopText}>CORPO DE BOMBEIROS</Text>
        <Image style={styles.imageLogo} source={require('../../images/logo1x.png')}  />          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageLogo: {
    flexShrink: 10,
    resizeMode: 'contain', 
    width: 60,
    height: 60
  },
  titleTop : {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "black",
    paddingTop: 20,
    paddingBottom: 20
  },
  titleTopText : {
    fontFamily: "Arial",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",   
  }
});