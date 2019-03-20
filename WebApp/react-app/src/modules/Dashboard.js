import React, { Component } from 'react';
import './Basic.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer, MDBRow } from 'mdbreact';

class Dashboard extends Component {
  state = {
    text: "Loading."
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
        ),2000);
    }
    componentWillUnmount() {
      clearInterval(this.interval);
    }

  render() {
    return (
        <div className="cards">
          <MDBContainer>
            <MDBRow middle="true">
            <MDBCol md="6" className="offset-md-3">
              <MDBCard style={{ width: "22rem" }}>
                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                <MDBCardBody>
                  <MDBCardTitle>Kevin's Pi</MDBCardTitle>
                  <MDBCardText>
                    {this.state.text}
                  </MDBCardText>
                  <MDBBtn href="#">Toggle</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
    );
  }
}

export default Dashboard;
