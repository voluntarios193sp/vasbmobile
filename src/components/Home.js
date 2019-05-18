import React, { Component } from "react";
import { StyleSheet, Image, Switch, ScrollView, Text, View, TouchableOpacity } from "react-native";

export default class Home extends Component {

  clique = () => {
    console.log("Clique recebido");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <View style={styles.titleTop}>
            <Text>CORPO DE BOMBEIROS</Text>
            <Image source={require('../images/logo1x.png')}  />          
          </View>
          <View>
            <Text>Olá, Cicerelli</Text>
            <Switch /><Text>Disponível</Text>
          </View>
        </View>
        <ScrollView>
          <View>
            <TouchableOpacity
              style={styles.mainButton}
              onPress={ this.clique }
            >
              <Image source={require('../images/first-aid.png')}  />
              <Text>Primeiros Socorros</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.mainButton}
              onPress={ this.clique }
            >
              <Image source={require('../images/phone-call.png')}  />
              <Text>Chamar 193</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.mainButton}
              onPress={ this.clique }
            >
              <Image source={require('../images/fire.png')}  />
              <Text>Incêndio</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.mainButton}
              onPress={ this.clique }
            >
              <Image source={require('../images/ambulance.png')}  />
              <Text>Ambulância</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.mainButton}
              onPress={ this.clique }
            >
              <Image source={require('../images/heartbeat.png')}  />
              <Text>Hospitais Próximos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.mainButton}
              onPress={ this.clique }
            >
              <Image source={require('../images/car-crash.png')}  />
              <Text>Acidente</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    flexDirection: "column"
  },
  titleTop : {
    backgroundColor: "red"
  },
  containerTop: {
    backgroundColor: "gray"
  },
  containerBody: {
    flex: 2,
    flexDirection: "row",
    backgroundColor: "white"
  },
  mainButton: {
    backgroundColor: "red",
    color: "white",
    fontFamily: "Arial",
    fontSize: 10
  }
});
