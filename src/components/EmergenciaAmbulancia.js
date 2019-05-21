import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CheckBox from 'react-native-check-box';

import Icon from 'react-native-vector-icons/FontAwesome5';

import LogoTitle from "./genericos/LogoTitle";

import UsersMap from './shared/UsersMap';
import OverlayMap from './shared/OverlayMap';
import Geocoder from './shared/Geocoder';

import CallEmergency from './shared/CallEmergency';

export default class EmergenciaAmbulancia extends Component {

  static navigationOptions = {
    headerTitle: "CORPO DE BOMBEIROS",
    headerRight: <LogoTitle />
  };

  state = {
    userLocation: null,
    userAddress: null,
    injured: 0,
    isHeartChecked: false,
    isDrownChecked: false,
    isChockedChecked: false,
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

  addInjured = (qty) => {
    console.log(qty);
    if(qty < 0 && this.state.injured == 0)
      return;

    this.setState({
      injured: this.state.injured + qty
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          <UsersMap userLocation={this.state.userLocation} />
          <OverlayMap userLocation={this.state.userLocation} userAddress={this.state.userAddress}/>
        </View>

        <View style={styles.incidentContainer}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View style={{width: "60%"}} >
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox
                    onClick={()=>{
                        this.setState({
                          isHeartChecked:!this.state.isHeartChecked
                        })
                      }}
                    isChecked={this.state.isHeartChecked}
                    checkedImage={<Icon name="heartbeat" style={styles.iconIncidentChecked} />}
                    unCheckedImage={<Icon name="heartbeat" style={styles.iconIncidentUnChecked} />}
                />
                <CheckBox
                    onClick={()=>{
                        this.setState({
                          isDrownChecked:!this.state.isDrownChecked
                        })
                      }}
                    isChecked={this.state.isDrownChecked}
                    checkedImage={<Icon name="swimmer" style={styles.iconIncidentChecked} />}
                    unCheckedImage={<Icon name="swimmer" style={styles.iconIncidentUnChecked} />}
                />
                <CheckBox
                    onClick={()=>{
                        this.setState({
                          isChockedChecked:!this.state.isChockedChecked
                        })
                      }}
                    isChecked={this.state.isChockedChecked}
                    checkedImage={<Icon name="drumstick-bite" style={styles.iconIncidentChecked} />}
                    unCheckedImage={<Icon name="drumstick-bite" style={styles.iconIncidentUnChecked} />}
                />
                {/* <CheckBox
                    onClick={()=>{
                        this.setState({
                          isOtherChecked:!this.state.isOtherChecked
                        })
                      }}
                    isChecked={this.state.isOtherChecked}
                    checkedImage={<Icon name="fire-alt" style={styles.iconIncidentChecked} />}
                    unCheckedImage={<Icon name="fire-alt" style={styles.iconIncidentUnChecked} />}
                /> */}
              </View>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="user-injured" style={styles.iconIncidentChecked} />
                <TouchableOpacity onPress={ () => { this.addInjured(-1) } }>
                  <Icon name="minus" style={styles.iconAction} />
                </TouchableOpacity>
                <Text style={styles.textInjured}>{this.state.injured}</Text>
                <TouchableOpacity onPress={ () => { this.addInjured(1) } }>
                  <Icon name="plus" style={styles.iconAction} />
                </TouchableOpacity>
              </View>
            </View>
            <View >
              <TouchableOpacity style={styles.mainButton} onPress={ () => { this.clique('Incendio') } }>
                <Icon name="ambulance" style={styles.iconMain} />
                <Text style={styles.textButton}>Chamar Ambulância</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    alignItems: 'stretch',
    backgroundColor: "white",
    height: '100%',
  },
  footer: {
    justifyContent: 'flex-end',
  },
  mapContainer: {
    height: '65%',
    width: '100%',
    justifyContent: 'flex-start',
  },
  incidentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch', 
    marginBottom: 5,
  },
  mainButton: {
    borderRadius: 10,
    backgroundColor: "#075e54",
    textAlign: "center",
    alignItems: "center",
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%",
    height: "100%"   
  },
  textButton: {
    color: "white",
    fontFamily: "Arial",
    fontSize: 14,
    fontWeight: "bold"
  },
  textInjured: {
    padding: 8,
    color: "black",
    fontFamily: "Arial",
    fontSize: 36,
    fontWeight: "bold"
  },
  iconMain : {
    color : "rgba(255, 255, 255, 1)",
    fontSize : 110,
  },
  iconAction: {
    padding: 8,
    color : "rgba(0, 0, 0, 1)",
    fontSize : 18,
  },
  iconIncidentChecked: {
    padding: 8,
    color : "rgba(0, 0, 0, 1)",
    fontSize : 46,
  },
  iconIncidentUnChecked: {
    padding: 8,
    color : "rgba(0, 0, 0, .6)",
    fontSize : 46,
  }
});