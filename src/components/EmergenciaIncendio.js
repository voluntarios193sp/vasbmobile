import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome5';

import LogoTitle from "./genericos/LogoTitle";

import UsersMap from './shared/UsersMap';
import OverlayMap from './shared/OverlayMap';
import Geocoder from './shared/Geocoder';

import CallEmergency from './shared/CallEmergency';

export default class EmergenciaIncendio extends Component {

  static navigationOptions = {
    headerTitle: "CORPO DE BOMBEIROS",
    headerRight: <LogoTitle />
  };

  state = {
    userLocation: null,
    userAddress: null
  }

  getUserLocationHandler = () => {
    console.log('getUserLocationHandler');

    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);

        this.setState({
          userLocation: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0622,
            longitudeDelta: 0.0421
          }
        })

        this.getAddress(
          position.coords.latitude, 
          position.coords.longitude
        );
        
      }, 
      err => console.log(err)
    );
  }

  getAddress = (lat, lng) => {
    Geocoder.init();  
    
    Geocoder.from(lat, lng)
		.then(json => {
      var returned_address = json.results[0];

      console.log(json.results);

      this.setState({
        userAddress: returned_address
      });
		})
		.catch(error => console.warn(error));
  };

  async componentDidMount() {
    try {
      this.getUserLocationHandler();
    } catch(e) {

    }
  }

  clique = (page) => {
    console.log('Clique recebido ' + page);
    // return this.props.navigation.navigate(page, { });
  }  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          <UsersMap userLocation={this.state.userLocation} />
          <OverlayMap userLocation={this.state.userLocation} userAddress={this.state.userAddress}/>
        </View>

        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch', 
            marginBottom: 5,
          }}>
            {/* <View style={{height: "100%", backgroundColor: 'powderblue'}} > */}
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <View style={{width: "60%", backgroundColor: 'skyblue'}} />
                <View >
                  <TouchableOpacity style={styles.mainButton} onPress={ () => { this.clique('Incendio') } }>
                    <Icon name="fire" style={styles.iconMain} />
                    <Text style={styles.textButton}>Confirmar Incêndio</Text>
                  </TouchableOpacity>
                </View>
              </View>
            {/* </View> */}
        </View>

        <View style={styles.footer}>
          <CallEmergency />
        </View>
      </View>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: "white",
    color: "white",
    height: '100%',
    // width: "100%"
  },
  footer: {
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // height: '20%',
    // width: "100%"
    justifyContent: 'flex-end',
  },
  mapContainer: {
    // ...StyleSheet.absoluteFillObject,
    // position: 'absolute',
    // top: 0,
    // left: 0,
    height: '65%',
    width: '100%',
    justifyContent: 'flex-start',
    // alignItems: 'center',
  },
  incidentContainer: {
    // ...StyleSheet.absoluteFillObject,
    // position: 'absolute',
    // top: 0,
    // left: 0,
    height: '40%',
    width: '100%',
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  mainButton: {
    borderRadius: 10,
    borderColor: "#707070",
    backgroundColor: "#33B5E5",
    textAlign: "center",
    alignItems: "center",
    padding: 10,    
    // margin: 10,
    // width: "100%",
    height: "100%"   
  },
  textButton: {
    color: "white",
    fontFamily: "Arial",
    fontSize: 14,
    fontWeight: "bold"
  },
  iconMain : {
    color : "rgba(255, 255, 255, 1)",
    fontSize : 110,
  }
});