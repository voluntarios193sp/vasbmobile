import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import LogoTitle from "./genericos/LogoTitle";

import MapView from 'react-native-maps';
import PlaceSearch from "./shared/PlaceSearch";

import LocationCard from './shared/LocationCard';

export default class Hospitais extends Component {
  static navigationOptions = {
    headerTitle: "CORPO DE BOMBEIROS",
    headerRight: <LogoTitle />
  };

  state = {
    userLocation: null
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

        this.getHospitalList(
          position.coords.latitude, 
          position.coords.longitude
        );
        
      }, 
      err => console.log(err)
    );
  }

  getHospitalList = (lat, lng) => {
    PlaceSearch.init();

    PlaceSearch.getFromLatLng(lat, lng, 1500, 'hospital')
		.then(json => {
      var _results = json.results;

      console.log(json.results);

      var _hospitais = _results.map( function(_hospital) {
        var marker = { "key": _hospital.place_id, 
                      "title": _hospital.name,
                      "coordinates": {
                        "latitude": _hospital.geometry.location.lat,
                        "longitude": _hospital.geometry.location.lng
                      }}

        return marker;
      });

      var _markers = _hospitais.map(marker => (
        <MapView.Marker 
          key={marker.key}
          coordinate={marker.coordinates}
          title={marker.title}
        />
      ))

      console.log(_markers.length);

      this.setState({
        hospitais: _hospitais,
        markers: _markers
      });
		})
		.catch(error => console.warn(error));
  }

  async componentDidMount() {
    try {
      this.getUserLocationHandler();
    } catch(e) {

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          <MapView 
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
              minZoomLevel={14}
              region={this.state.userLocation}
              style={styles.map} >
                          
              {this.state.markers}
            </MapView>
        </View>
        <View>
          <LocationCard />
          <LocationCard />
          <LocationCard />
          <LocationCard />
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
  mapContainer: {
    height: '45%',
    width: '100%',
    justifyContent: 'flex-start',
  },
  map: {
    height: '100%',
    width: '100%',
    // flex: 1,
    // ...StyleSheet.absoluteFillObject,
  }
});