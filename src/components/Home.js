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
            <Text>CORPO DE BOMBEIROS</Text>
            <Image source={require('../images/logo1x.png')}  />          
          </View>
          <View style={styles.userBox}>
            <Text>Olá, Cicerelli</Text>
            <Switch /><Text>Disponível</Text>
          </View>
        </View>
        <View style={styles.containerBody}>
          <View>
            <TouchableOpacity
              style={styles.mainButton}
              onPress={ this.clique }
            >
              <Image source={require('../images/first-aid.png')}  />
              <Text style={styles.textButton}>Primeiros Socorros</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton} onPress={ this.clique }>
              <Image source={require('../images/phone-call.png')}  />
              <Text style={styles.textButton}>Chamar 193</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.mainButton} onPress={ this.clique }>
              <Image source={require('../images/fire.png')}  />
              <Text style={styles.textButton}>Incêndio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton} onPress={ this.clique }>
              <Image source={require('../images/ambulance.png')}  />
              <Text style={styles.textButton}>Ambulância</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.mainButton} onPress={ this.clique }>
              <Image source={require('../images/heartbeat.png')}  />
              <Text style={styles.textButton}>Hospitais Próximos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton} onPress={ this.clique }>
              <Image source={require('../images/car-crash.png')}  />
              <Text style={styles.textButton}>Acidente</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomBox}>
          <TouchableOpacity style={styles.mainButton} onPress={ this.clique }>
            <Image source={require('../images/profile.png')}  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainButton} onPress={ this.clique }>
            <Image source={require('../images/calendar.png')}  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainButton} onPress={ this.clique }>
            <Image source={require('../images/chat.png')}  />
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
  titleTop : {
    backgroundColor: "red"
  },
  userBox : {
    backgroundColor: "gray"
  },
  containerTop: {
    backgroundColor: "gray"
  },
  containerBody: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start"
  },
  mainButton: {
    backgroundColor: "red",
    textAlign: "center",
    padding: 15,
    width: "100%"   
  },
  textButton: {
    color: "white",
    fontFamily: "Arial",
    fontSize: 14,
    fontWeight: "bold"
  }
});
