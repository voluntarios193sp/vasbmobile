import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Splash from "./components/Splash";
import Home from './components/Home';

export default class App extends Component {

  state = {
    activeWindow : "SPLASH",
    remainingSeconds: 3
  }

  changeWindow = (windowName) => {
    this.setState({
      activeWindow : windowName
    })
  }

  componentDidMount() {
    this.intervalId = setInterval( () => {
      this.setState(
        (prevState) => {
          return { remainingSeconds: prevState.remainingSeconds -1}
        },
        () => {
          if (this.state.remainingSeconds === 0) {
            clearInterval(this.intervalId);
            this.changeWindow("HOME");
          }
        }
      );
    }, 1000);
  }

  componentWillMount() {
    clearInterval(this.intervalId);
  }

  render() {
    if (this.state.activeWindow === "SPLASH") {
      return (
        <Splash />
      )
    }
    if (this.state.activeWindow === "HOME") {
      return (
        <Home />
      )
    }    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
