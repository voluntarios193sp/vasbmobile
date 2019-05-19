import React, { Component } from "react";
import Splash from "./components/Splash";
import Home from './components/Home';
import Cadastro from "./components/Cadastro";

export default class App extends Component {

  state = {
    activeWindow : "SPLASH",
    remainingSeconds: 1
  };

  changeWindow = (windowName) => {
    console.log("changeWindow ", windowName);
    this.setState({
      activeWindow : windowName
    });
  };

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
  };

  componentWillMount() {
    clearInterval(this.intervalId);
  };

  render() {
    if (this.state.activeWindow === "SPLASH") {
      return (
        <Splash />
      )
    }
    if (this.state.activeWindow === "HOME") {
      return (
        <Home fnChangeWindow={this.changeWindow} />
      )
    }
    if (this.state.activeWindow === "CADASTRO") {
      return (
        <Cadastro />
      )
    }        
  };
}