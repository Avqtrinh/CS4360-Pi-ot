import React, { Component } from 'react';
import './Basic.css';
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class Stats extends Component {

  state = {
    dataLine: {
      labels: ["3-13-19", "3-14-19", "3-15-19", "3-16-19", "3-17-19", "3-18-19", "3-19-19"],
      datasets: [
        {
          label: "Successful Connections",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [0, 4, 0, 1, 0, 2, 2]
        }
      ]
    }
  }

  render() {
    return (
      <MDBContainer>
        <div className="stat">
          <Line data={this.state.dataLine} options={{ responsive: true }} />
        </div>
      </MDBContainer>
    );
  }
}

export default Stats;