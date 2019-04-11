import React, { Component } from 'react';
import Navigation from './Navigation'
import './Basic.css';

class App extends Component {
  render() {
    return (
      <div data-test="app">
        <Navigation />
      </div>
    );
  }
}

export default App;