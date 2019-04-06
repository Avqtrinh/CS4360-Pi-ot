import React, { Component } from 'react';
import './Basic.css';

class Home extends Component {
  render() {
    return (
      <div className="basic">
        <h1> Hello! </h1>
        <p>Welcome to Pi-oT. To access the dashboard, please login.</p>
        <h1> </h1>
        <p>This web application was written in React JS for Dr. Beaty's CS4360 Senior Project class.</p>
        <p>Libraries used: React Router DOM, MDB React Bootstrap</p>
      </div>
    );
  }
}

export default Home;