import React, { Component } from 'react';
import './Basic.css';
class Display extends Component {
  state = {
    text: "Display"
  }


  componentDidMount() {
    fetch('http://localhost:3001/api')
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              text: result.text
            });
          }
        )
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
