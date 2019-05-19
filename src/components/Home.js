import React, { Component } from "react";
import { StyleSheet, Image, Switch, ScrollView, Text, View, TouchableOpacity } from "react-native";
import Cabecalho from "./genericos/Cabecalho";
import { PropTypes } from 'prop-types';
import Rodape from "./genericos/Rodape";

export default class Home extends Component {

  static propTypes = {
    fnChangeWindow: PropTypes.func.isRequired
  };

  clique = () => {
    console.log("Clique recebido");
  }

  abreCadastro = () => {
    console.log("Clique abreCadastro");
    this.props.fnChangeWindow("CADASTRO");
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.containerTop}>
          <Cabecalho />
          <View style={styles.userBox}>
            <Text style={[styles.textButton, {marginLeft: 15}]}>Olá, Cicerelli</Text>
            <View style={styles.availableBox}>
              <Switch /><Text style={styles.textButton}>Disponível</Text>
            </View>            
          </View>
        </View>
        <View style={styles.containerBody}>
            <TouchableOpacity style={styles.mainButton} onPress={ this.clique }>
              <Image source={require('../images/first-aid.png')}  />
              <Text style={styles.textButton}>Primeiros Socorros</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton} onPress={ this.clique }>
              <Image source={require('../images/phone-call.png')}  />
              <Text style={styles.textButton}>Chamar 193</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton} onPress={ this.clique }>
              <Image source={require('../images/fire.png')}  />
              <Text style={styles.textButton}>Incêndio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton} onPress={ this.clique }>
              <Image source={require('../images/ambulance.png')}  />
              <Text style={styles.textButton}>Ambulância</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton} onPress={ this.clique }>
              <Image source={require('../images/heartbeat.png')}  />
              <Text style={styles.textButton}>Hospitais Próximos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton} onPress={ this.clique }>
              <Image source={require('../images/car-crash.png')}  />
              <Text style={styles.textButton}>Acidente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton} onPress={ this.clique }>
              <Image source={require('../images/doacao.png')}  />
              <Text style={styles.textButton}>Doações</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton} onPress={ this.abreCadastro }>
              <Image source={require('../images/info-circle.png')}  />
              <Text style={styles.textButton}>Informação</Text>
            </TouchableOpacity>
        </View>        
        <Rodape />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    backgroundColor: "white"
  },  
  userBox : {
    backgroundColor: "gray",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center"
  },
  availableBox: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 15
  },
  containerTop: {
    backgroundColor: "gray"
  },
  containerBody: {
    backgroundColor: "white",    
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around"
  },
  mainButton: {
    backgroundColor: "red",
    textAlign: "center",
    alignItems: "center",
    padding: 15,
    margin: 10,
    width: "40%"   
  },
  textButton: {
    color: "white",
    fontFamily: "Arial",
    fontSize: 14,
    fontWeight: "bold"
  }
});
