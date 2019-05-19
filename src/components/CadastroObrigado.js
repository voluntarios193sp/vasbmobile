import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import LogoTitle from "./genericos/LogoTitle";
import TituloTela from "./genericos/TituloTela";

export default class CadastroObrigado extends Component {
  
  static navigationOptions = {
    headerTitle: "CORPO DE BOMBEIROS",
    headerRight: <LogoTitle />
  };

  constructor(props) {  
    super(props);
    this.state = {
      user : this.props.navigation.getParam('user')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TituloTela titulo="Cadastro em análise" />
        <View style={styles.bodyStyle}>
          <Text style={styles.label}>Obrigado por enviar o seu cadastro.</Text>
          <Text style={styles.label}>Após análise um email com uma senha será enviado.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {    
    backgroundColor: "white"
  },
  label: {
    color: "darkred",
    fontFamily: "Arial",
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
    margin: 20
  },
  bodyStyle : {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  }
});