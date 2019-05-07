import React, { Component } from 'react';
import './Basic.css';
import { MDBBtn } from 'mdbreact';

class Home extends Component {
  render() {
    return (
      <div className="basic" data-test="home">
        <h1> Welcome to Pi-oT.</h1>
          <p> Please login to access the Pi-oT Utilities. </p>
          <p> This web application was written for Dr. Beaty's CS4360 Senior Project class.</p>
          <MDBBtn color="indigo" type="redirect" href='#/login'>Login</MDBBtn>
      </div>
    );
  }
}

export default Home;
