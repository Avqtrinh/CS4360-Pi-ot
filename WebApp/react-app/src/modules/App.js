import React, { Component } from 'react';
import Navigation from './Navigation';
import Routes from './Routes';
import './Basic.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
    };
  }

  userHasAuthenticated = authenticated => {
      this.setState({ isAuthenticated: authenticated });

  }
  /*
  componentDidUpdate(){
  const childProps = {
    isAuthenticated: this.isAuthenticated,
    userHasAuthenticated: this.userHasAuthenticated,
  };


  return (
    <div data-test="app">
      <Navigation childProps={childProps}/>
      <Routes childProps={childProps}/>
    </div>
  );
  }
  */
  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
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
