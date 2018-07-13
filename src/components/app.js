import React, { Component } from 'react';

import Navigation from './navigation';
import Header from './header';
import LoginScreen from './login';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header />
        <Navigation /> */}
        <LoginScreen />
      </div>
    );
  }
}
