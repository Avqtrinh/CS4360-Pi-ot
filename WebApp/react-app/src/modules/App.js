import React, { Component } from 'react';
import Navigation from './Navigation';
import Routes from './Routes';
import './Basic.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }

  userAuthenticated = authenticated => {
    this.setState({isAuthenticated: authenticated})
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userAuthenticated: this.userAuthenticated
    };

    return (
      <div data-test="app">
        <Navigation />
        <Routes />
      </div>
    );
  }
}

export default App;