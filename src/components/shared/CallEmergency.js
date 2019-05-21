import React from 'react';
import { TouchableOpacity, View, ScrollView, Text, StyleSheet } from 'react-native';
import PhoneCall from './PhoneCall';

import Icon from 'react-native-vector-icons/FontAwesome5';

const callEmergency = props => {
  call = (number) => {
    console.log('Chamar ' + number);

    PhoneCall(number)
      .catch(console.err);
  }

  return (
    <TouchableOpacity style={styles.mainButton} onPress={ () => { this.call('193') } }>
      <Text style={styles.textButton}><Icon name="phone-volume" style={styles.iconMain} />  Chamar 193</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({  
  mainButton: {
    backgroundColor: "#BA1515",
    textAlign: "center",
    alignItems: "center",
    padding: 5,
    // marginBottom: 10,
    // width: "100%"
  },
  textButton: {
    color: "white",
    fontFamily: "Arial",
    fontSize: 24,
    fontWeight: "bold"
  },
  iconMain : {
    color : "rgba(255, 255, 255, 1)",
    fontSize : 24,
  }
});

export default callEmergency;