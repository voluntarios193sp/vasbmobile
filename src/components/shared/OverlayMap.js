import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const overlayMap = props => {
  let userLocationCoords = null;
  let userAddress = null;

  // if(props.userLocation) {
  //   userLocationCoords = <Text style={styles.textTitle}>(LAT: {props.userLocation.latitude}, LON: {props.userLocation.longitude})</Text>;    
  // };

  if(props.userAddress) {
    userAddress = <Text style={styles.textAddress}>{props.userAddress.formatted_address}</Text>;
    userLocationCoords = <Text style={styles.textTitle}>(LAT: {props.userAddress.geometry.location.lat}, LON: {props.userAddress.geometry.location.lng})</Text>;    
  }

  return (
    <View style={styles.overlay}>
      <View style={styles.addressContainer}>
        <Text style={styles.textTitle}>Por favor informe quando perguntado o endereço:</Text>
        {/* <Text style={styles.textAddress}>Rua Benjamin Constant, 123</Text> */}
        {/* <Text style={styles.textAddress}>Centro - São Paulo - SP - 01.123.456</Text> */}
        {userAddress}
        {userLocationCoords}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addressContainer: {
    textAlign: "center",
    alignItems: "center"    
  }, 
  overlay:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: '35%',
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  textTitle: {
    fontSize: 14,
    // fontWeight: "bold",
    color: "white",
    fontFamily: "Arial",
    marginBottom: 5,
    marginTop: 5 
  },
  textAddress: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Arial",
  },
});

export default overlayMap;

