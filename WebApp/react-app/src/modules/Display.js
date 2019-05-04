import React, { Component } from 'react';

class Display extends Component {
  state = {
    text: "Display"
  }

  componentDidMount() {
    this.interval = setInterval(() =>
      fetch('http://localhost:3001/api')
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                text: result.text
              });
            }
      ),5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
      return (
        <div id= "test" align = "center">
          <p className="basic" align = "center">
            {this.state.text}
            {this.state.load}
            </p>
        </div>
      );
  }
}

export default Display;
