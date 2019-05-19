import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";

export default class LogoTitle extends Component {
  render() {
    return (
      <Image 
        style={styles.imageLogo}  
        source={require('../../images/logo1x.png')}  
      />
    );
  }
}

const styles = StyleSheet.create({
  imageLogo: {
    flexShrink: 10,
    resizeMode: 'contain', 
    width: 60,
    height: 60,
    marginRight: 15
  }
});