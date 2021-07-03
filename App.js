import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MainNavigation from './src/Navigation/MainNavigation';
import Splash from './src/Screens/Splash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 'splashScreen'
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        currentScreen: 'Navigation'
      })
    }, 2000);
  }

  render() {
    return (
      this.state.currentScreen == 'splashScreen' ? <Splash /> : <MainNavigation />
    );
  }
}

export default App;
