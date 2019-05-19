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
    this.validateForm = this.validateForm.bind(this);
    this.state = {
      userEmail : this.props.navigation.getParam('userEmail'),
      userCPF : "",
      userRG : "",
      userNome : "",
      userTelefone : ""
    }
  }

  validateForm() {
    const tituloAlerta = "Validação formulário"
    if (this.state.userNome.length < 5) {
      Alert.alert(tituloAlerta, "Nome inválido")
      this.nome.focus()
      return
    } 
    if (this.state.userCPF.length != 11) {
      Alert.alert(tituloAlerta, "CPF inválido")
      this.cpf.focus()
      return
    } 
    if (this.state.userRG.length < 5) {
      Alert.alert(tituloAlerta, "RG inválido")
      this.rg.focus()
      return
    } 
    if (this.state.userTelefone.length != 11) {
      Alert.alert(tituloAlerta, "Celular inválido")
      this.telefone.focus()
      return
    } 
    if (!this.state.userTelefone.startsWith("1")) {
      Alert.alert(tituloAlerta, "Celular precisa ser de SP")
      this.telefone.focus()
      return
    } 
    this.props.navigation.navigate('CadastroObrigado', { user : this.state } )
  }

  render() {
    return (
      <ScrollView style={FormStylesGeneric.container}>
        {/* <Cabecalho /> */}
        <TituloTela titulo="Cadastro Inicial" />
        <KeyboardAvoidingView behavior="padding" enabled>
          <View style={FormStylesGeneric.lineFormElements}>
            <Text style={FormStylesGeneric.label}>Nome</Text>
            <TextInput 
              autoFocus={true} 
              onChangeText={t => this.setState({userNome: t})} 
              onSubmitEditing={() => { 
                this.cpf.focus(); 
              }}
              ref={nome => { this.nome = nome}}
              style={FormStylesGeneric.textInputStyle} 
              placeholder="Seu nome" 
              maxLength={100} />
            <Text style={FormStylesGeneric.label}>CPF</Text>
            <TextInput 
              keyboardType="numeric" 
              onChangeText={t => this.setState({userCPF: t})} 
              onSubmitEditing={() => { 
                this.rg.focus(); 
              }}
              ref={cpf => { this.cpf = cpf}}
              style={FormStylesGeneric.textInputStyle} 
              placeholder="seu cpf sem tracos e numeros" 
              maxLength={15} />
            <Text style={FormStylesGeneric.label}>RG</Text>
            <TextInput 
              onChangeText={t => this.setState({userRG: t})} 
              ref={rg => { this.rg = rg}}
              onSubmitEditing={() => { 
                this.telefone.focus(); 
              }}
              style={FormStylesGeneric.textInputStyle} 
              placeholder="RG" 
              maxLength={15} />
            <Text style={FormStylesGeneric.label}>DDD + Celular</Text>
            <TextInput 
              keyboardType="phone-pad" 
              onChangeText={t => this.setState({userTelefone: t})} 
              onSubmitEditing={() => { 
                this.validateForm(); 
              }}
              ref={telefone => { this.telefone = telefone}}
              style={FormStylesGeneric.textInputStyle} 
              placeholder="DDD + Celular. Somente números" 
              maxLength={12} />            
          </View>
          <View style={FormStylesGeneric.lineFormElements}>
            <TouchableOpacity style={FormStylesGeneric.nextButton} onPress={this.validateForm}>
              <Text ref="btnSalvar" style={FormStylesGeneric.nextButtonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        {/* <Rodape /> */}
      </ScrollView>
    );
  }
}