import React, { Component } from "react";
import { StyleSheet, Switch, ScrollView, Text, View, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/FontAwesome5';
import LogoTitle from "./genericos/LogoTitle";

export default class Home extends Component {

  state = {
    dadosUsuario: null
  } 

  static navigationOptions = {
    headerTitle: "CORPO DE BOMBEIROS",
    headerRight: <LogoTitle />
  };

  clique = (page) => {
    console.log('Clique recebido ' + page);
    return this.props.navigation.navigate(page, { });
  }  

  async componentDidMount() {
    try {
      const value = await AsyncStorage.getItem('dadosUsuario')
      this.setState({
        dadosUsuario : value
      })
    } catch(e) {
      console.error("componentDidMount error ", e)
      this.setState({
        dadosUsuario : "Jose Da Silva"
      })
    }
  }

  render() {

    return (
      <ScrollView style={styles.container}>
        <View style={styles.containerTop}>
          <View style={styles.userBox}>
            <Text style={[styles.textButton, {marginLeft: 15}]}>Olá, {this.state.dadosUsuario}</Text>
            <View style={styles.availableBox}>
              <Switch /><Text style={styles.textButton}>Disponível</Text>
            </View>            
          </View>
        </View>
        <View style={styles.containerBody}>        
            <TouchableOpacity style={styles.mainButton} onPress={ () => { this.clique('PrimeirosSocorros') } }>
              <Icon name="first-aid" style={styles.iconMain}/>
              <Text style={styles.textButton}>Primeiros Socorros</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton} onPress={ () => { this.clique('Incendio') } }>
              <Icon name="phone-volume" style={styles.iconMain} />
              <Text style={styles.textButton}>Chamar 193</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton} onPress={ () => { this.clique('Incendio') } }>
              <Icon name="fire" style={styles.iconMain} />
              <Text style={styles.textButton}>Incêndio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton} onPress={ () => { this.clique('Emergencia') } }>
              <Icon name="ambulance" style={styles.iconMain} />
              <Text style={styles.textButton}>Ambulância</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton} onPress={ () => { this.clique('Hospitais') } }>
              <Icon name="heartbeat" style={styles.iconMain} />
              <Text style={styles.textButton}>Hospitais Próximos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton} onPress={ () => { this.clique('Emergencia') } }>
              <Icon name="car-crash" style={styles.iconMain} />
              <Text style={styles.textButton}>Acidente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton} onPress={ () => { this.clique('Perfil') } }>
              <Icon name="id-card" style={styles.iconMain} />
              <Text style={styles.textButton}>Meu Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton} onPress={ () => { this.clique('Calendario') } }>
              <Icon name="calendar-alt" style={styles.iconMain} />
              <Text style={styles.textButton}>Calendario</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton} onPress={ () => { this.clique('Doacao') } }>
              <Icon name="hand-holding-usd" style={styles.iconMain} />
              <Text style={styles.textButton}>Doações</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton} onPress={ () => { this.clique('Informacao') } }>
              <Icon name="info-circle" style={styles.iconMain} />
              <Text style={styles.textButton}>Informação</Text>
            </TouchableOpacity>
        </View>        
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
    padding: 10,
    marginBottom: 10,
    width: "48%"   
  },
  textButton: {
    color: "white",
    fontFamily: "Arial",
    fontSize: 14,
    fontWeight: "bold"
  },
  iconMain : {
    color : "rgba(255, 255, 255, 1)",
    fontSize : 65,
  }
});
