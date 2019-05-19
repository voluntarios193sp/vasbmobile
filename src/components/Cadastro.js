import React, { Component } from "react";
import { StyleSheet, KeyboardAvoidingView, Text, View, TextInput } from "react-native";
import Cabecalho from "./genericos/Cabecalho";
import TituloTela from "./genericos/TituloTela";
import Rodape from "./genericos/Rodape";

export default class Cadastro extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Cabecalho />
        <TituloTela titulo="Cadastro Inicial" />
        <KeyboardAvoidingView behavior="padding" enabled>
          <View style={styles.lineFormElements}>
            <Text style={styles.label}>Nome</Text>
            <TextInput placeholder="Seu nome" maxLength={100} />
          </View>
          <View style={styles.lineFormElements}>
            <Text style={styles.label}>Data de nascimento</Text>
            <DatePicker mode="date" format="DD/MM/YYYY" minDate="01/01/1940" maxDate="31/12/2001" />
          </View>
        </KeyboardAvoidingView>
        <Rodape />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "white",   
  },
  lineFormElements : {
    marginBottom: 10
  },
  label: {
    color: "darkred",
    fontFamily: "Arial",
    fontSize: 14,
    fontWeight: "bold"
  }
});