import React, { Component } from 'react';
import Navigation from './Navigation';
import Routes from './Routes';
import './Basic.css';
import { Auth } from 'aws-amplify';

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
  updateUser = user =>{
    this.setState({user:user});
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      userHasAuthenticated: this.userHasAuthenticated,
      updateUser:this.updateUser,
    };
    return (
      <div data-test="app">
        <Navigation childProps={childProps}/>
        <Routes childProps={childProps}/>
      </div>
    );
  }
}

export default App;
