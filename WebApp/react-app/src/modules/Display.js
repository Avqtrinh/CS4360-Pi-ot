import React, { Component } from 'react';
import './Basic.css';

const ReactDOM = require('react-dom');
function updateView(){
  return <p> TEST </p>
}
class Display extends Component {
  state = {
    text: "Display"
  }
  render() {
    return (
      <div id= "test" align = "center">
        <p className="basic" align = "center">
          {this.state.text}
        </p>
      </div>
    );
  }
}


export default Display;
