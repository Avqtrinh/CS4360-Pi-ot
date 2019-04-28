import React, { Component } from 'react';
import Navigation from './Navigation';
import Routes from './Routes';
import './Basic.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      user:null,
    };
  }

  userHasAuthenticated = authenticated => {
      this.setState({ isAuthenticated: authenticated });
  }
  updateUser = user => {
      this.setState({ user: user });
  }
  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
      user: this.state.user,
    };
    console.log("render App")
    console.log(childProps)
    return (
      <div data-test="app">
        <Navigation childProps={childProps}/>
        <Routes childProps={childProps}/>
      </div>
    );
  }
}

export default App;
