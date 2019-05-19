import React, { Component } from "react";
import { StyleSheet, Image, View } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

export default class Splash extends Component {

  constructor(props) {
    super(props)
    this._verificaCadastro()
  }

  _verificaCadastro = () => {
    const dadosUsuario = "Cicerelli 2";
    console.log("_novocadastro", this.props)
    //  const dadosUsuario = null;
    if (!dadosUsuario) {      
      this.props.navigation.navigate('NovoUser')
    } else {
      (async () => {
        AsyncStorage.setItem('dadosUsuario', dadosUsuario)
          .then(() => {
            console.log("_verificaCadastro", dadosUsuario)
            this.props.navigation.navigate('App')
          })
          .catch(err => console.error("Erro Splash", err));     
      })();   
    }      
  }

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