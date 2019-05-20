import React from 'react';
import { View, StyleSheet } from 'react-native';

import MapView from 'react-native-maps';

const usersMap = props => {
  let userLocationMarker = null;
  let zoom = 17;

  if(props.userLocation) {
    userLocationMarker = <MapView.Marker coordinate={props.userLocation}/>;
  }

  return (
    <View style={styles.mapContainer}>
          <MapView 
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
            minZoomLevel={zoom}
            region={props.userLocation}
            style={styles.map} >
            
            {userLocationMarker}
          </MapView>
    </View>
  )
};

const styles = StyleSheet.create({  
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  map: {
    height: '100%',
    width: '100%',
    // flex: 1,
    // ...StyleSheet.absoluteFillObject,
  },
});

export default usersMap;