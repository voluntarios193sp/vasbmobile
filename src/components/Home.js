import React, { Component } from "react";
import { StyleSheet, Switch, ScrollView, Text, View, TouchableOpacity } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome5';
import LogoTitle from "./genericos/LogoTitle";

export default class Home extends Component {

  static navigationOptions = {
    headerTitle: "CORPO DE BOMBEIROS",
    headerRight: <LogoTitle />
  };

  clique = (page) => {
    console.log('Clique recebido ' + page);

    return this.props.navigation.navigate(page, { });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.containerTop}>
          <View style={styles.userBox}>
            <Text style={[styles.textButton, {marginLeft: 15}]}>Olá, Cicerelli</Text>
            <View style={styles.availableBox}>
              <Switch /><Text style={styles.textButton}>Disponível</Text>
            </View>            
          </View>
        </View>
        <View style={styles.containerBody}>        
            <TouchableOpacity style={styles.mainButton} onPress={ () => { this.clique('PrimeirosSocorros') } }>
              <Icon name="first-aid" color="rgba(255, 255, 255, 1)" size={90} />
              <Text style={styles.textButton}>Primeiros Socorros</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton} onPress={ () => { this.clique('Incendio') } }>
              <Icon name="phone-volume" color="rgba(255, 255, 255, 1)" size={90} />
              <Text style={styles.textButton}>Chamar 193</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton} onPress={ () => { this.clique('Incendio') } }>
              <Icon name="fire" color="rgba(255, 255, 255, 1)" size={90} />
              <Text style={styles.textButton}>Incêndio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton} onPress={ () => { this.clique('Emergencia') } }>
              <Icon name="ambulance" color="rgba(255, 255, 255, 1)" size={90} />
              <Text style={styles.textButton}>Ambulância</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton} onPress={ () => { this.clique('Hospitais') } }>
              <Icon name="heartbeat" color="rgba(255, 255, 255, 1)" size={90} />
              <Text style={styles.textButton}>Hospitais Próximos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton} onPress={ () => { this.clique('Emergencia') } }>
              <Icon name="car-crash" color="rgba(255, 255, 255, 1)" size={90} />
              <Text style={styles.textButton}>Acidente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton} onPress={ () => { this.clique('Perfil') } }>
              <Icon name="id-card" color="rgba(255, 255, 255, 1)" size={90} />
              <Text style={styles.textButton}>Meu Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton} onPress={ () => { this.clique('Calendario') } }>
              <Icon name="calendar-alt" color="rgba(255, 255, 255, 1)" size={90} />
              <Text style={styles.textButton}>Calendario</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton} onPress={ () => { this.clique('Doacao') } }>
              <Icon name="hand-holding-usd" color="rgba(255, 255, 255, 1)" size={90} />
              <Text style={styles.textButton}>Doações</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton} onPress={ () => { this.clique('Informacao') } }>
              <Icon name="info-circle" color="rgba(255, 255, 255, 1)" size={90} />
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
    padding: 0,
    marginBottom: 10,
    width: "48%"   
  },
  textButton: {
    color: "white",
    fontFamily: "Arial",
    fontSize: 14,
    fontWeight: "bold"
  }
});
