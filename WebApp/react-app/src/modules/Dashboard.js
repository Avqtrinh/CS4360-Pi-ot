import React, { Component } from 'react';
import './Basic.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer, MDBRow } from 'mdbreact';

class Dashboard extends Component {
  constructor(props){
    super(props)
  this.state = {didLoad: false};
  }

  state = {
    didLoad: false,
    text: "",
    load: <div class="spinner-grow" role="status">
            <span class="sr-only"></span>
          </div>
  }

  componentDidMount() {
    this.interval = setInterval(() =>
      fetch('http://localhost:3001/api')
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                didLoad: true,
                load: "",
                text: result.text,
                });
              }
          ),2000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
        <div className="cards" data-test="dashboard">
          <MDBContainer>
            <MDBRow>
            <MDBCol md="6">
              <MDBCard style={{ width: "22rem" }}>
                <MDBCardImage className="img-fluid" src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.zuehlke.com%2Fblog%2Fapp%2Fuploads%2F2016%2F07%2FCircuit-board-picture-.jpg&f=1" waves />
                <MDBCardBody>
                  <MDBCardTitle>User's Pi</MDBCardTitle>
                  <MDBCardText>
                    {this.state.load}
                    {this.state.text}
                  </MDBCardText>
                  <MDBBtn href="#">More Info</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="6">
            <ul className="list-group">
              <li className="list-group-item active">Components</li>
              <li className="list-group-item">GPS: Inactive</li>
              <li className="list-group-item">Motion Sensor: Active</li>
              <li className="list-group-item">Camera: Inactive</li>
            </ul>
            </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
    );
  }
}

export default Dashboard;
