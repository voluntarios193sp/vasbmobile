import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class LocationCard extends React.PureComponent {

  clique = (page) => {
    console.log('Clique recebido ' + page);
    // return this.props.navigation.navigate(page, { });
  }

  render() {
    return (
      <View style="styles.container">
        <TouchableOpacity style="styles.card">
          <Text style="styles.cardTitle"></Text>
          <Text style="styles.cardAddress"></Text>
          <Text style="styles.cardPhone"></Text>
          <View>
            <TouchableOpacity style={styles.mainButton} onPress={ () => { this.clique('Navegar') } }>
              <Text style={styles.textButton}>Navegar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainButton} onPress={ () => { this.clique('Chamar') } }>
              <Text style={styles.textButton}>Chamar</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,    
    backgroundColor: "white",
  },
  card: {

  },
  cardTitle: {

  },
  cardAddress: {

  },
  cardPhone: {

  },
  cardButton: {

  }
});