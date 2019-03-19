import React, { Component } from 'react';
import './Basic.css';

class Home extends Component {
  render() {
    return (
      <div className="basic">
        <h1> Hello! </h1>
        <p>Welcome to Pi-oT. To access the dashboard, please login.</p>
      </div>
    );
  }
}

export default Home;