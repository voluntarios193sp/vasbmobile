import React, { Component } from "react";
import { Alert, ScrollView, TouchableOpacity, KeyboardAvoidingView, Text, View, TextInput } from "react-native";
import TituloTela from "./genericos/TituloTela";
import LogoTitle from "./genericos/LogoTitle";
import FormStylesGeneric from "./shared/FormStylesGeneric"

export default class Cadastro extends Component {

  static navigationOptions = {
    headerTitle: "CORPO DE BOMBEIROS",
    headerRight: <LogoTitle />
  };

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      userEmail : ""
    }
  }

  handleInputChange(evt) {
    if (evt) {
      if (evt.includes("@") && evt.length > 7) {
        //console.log("handleInputChange ", evt)
        this.setState({userEmail : evt})
      }   
    }
  }

  performValidation = () => {
    console.log("performValidation ", this.state.userEmail)
    if (!this.state.userEmail.includes("@") || this.state.userEmail.length < 8) {
      Alert.alert("Validação Email", "Email informado não parece válido")
      this.email.focus()
      return
    }
    this.props.navigation.navigate('Cadastro', {userEmail : this.state.userEmail})
  }

  render() {
    return (
      <ScrollView style={FormStylesGeneric.container}>
        {/* <Cabecalho /> */}
        <TituloTela titulo="Validação email" />
        <KeyboardAvoidingView behavior="padding" enabled>
          <View style={FormStylesGeneric.lineFormElements}>
            <Text style={FormStylesGeneric.label}>Informe seu email abaixo: </Text>
            <TextInput 
              autoFocus={true}
              ref={email => { this.email = email}}
              keyboardType="email-address"
              onChangeText={this.handleInputChange} 
              onSubmitEditing={() => { 
                this.performValidation(); 
              }}
              style={FormStylesGeneric.textInputStyle} 
              placeholder="Seu email" 
              maxLength={100} />
          </View>
          <View style={FormStylesGeneric.lineFormElements}>
            <TouchableOpacity style={FormStylesGeneric.nextButton} onPress={this.performValidation}>
              <Text ref="btnValidar" style={FormStylesGeneric.nextButtonText}>Validar</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        {/* <Rodape /> */}
      </ScrollView>
    );
  }
}

