import React, { Component } from 'react';
import './Basic.css';

class Home extends Component {
  render() {
    return (
      <div className="basic" data-test="home">
        <h1> Welcome to Pi-oT.</h1>
          <p> Please login to access the dashboard. </p>
          <p> This web application was written for Dr. Beaty's CS4360 Senior Project class.</p>
      </div>
    );
  }
}

export default Home;