import React, { Component } from "react";
import { StyleSheet, Image, Switch, ScrollView, Text, View, TouchableOpacity } from "react-native";

export default class Home extends Component {

  clique = () => {
    console.log("Clique recebido");
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.containerTop}>
          <View style={styles.titleTop}>
            <Text style={styles.titleTopText}>CORPO DE BOMBEIROS</Text>
            <Image style={styles.imageLogo} source={require('../images/logo1x.png')}  />          
          </View>
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
            <TouchableOpacity style={styles.mainButton} onPress={ this.clique }>
              <Image source={require('../images/info-circle.png')}  />
              <Text style={styles.textButton}>Informação</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.bottomBox}>
          <TouchableOpacity style={styles.bottomButton} onPress={ this.clique }>
            <Image source={require('../images/profile.png')}  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton} onPress={ this.clique }>
            <Image source={require('../images/calendar.png')}  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton} onPress={ this.clique }>
            <Image source={require('../images/chat.png')}  />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  imageLogo: {
    flexShrink: 10,
    resizeMode: 'contain', 
    width: 90,
    height: 90
  },
  container: {
    backgroundColor: "white"
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
  },
  bottomBox : {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",    
    alignItems: "flex-start",
    backgroundColor: "#333",
    padding: 20    
  },
  bottomButton: {    
    justifyContent: "center"
  },
});
