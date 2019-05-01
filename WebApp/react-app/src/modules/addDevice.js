import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import './Basic.css';
import { Auth } from 'aws-amplify';

class AddDevice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      email:this.props.user.attributes["email"],
      password:""
    };
  }

  validateForm() {
    return this.state.id.length > 0 && this.state.password.length >0;
  }

    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    }

  handleSubmit = async event => {
    event.preventDefault();
    var attributes = {"custom:DeviceID":this.state.id}
    try{
      await Auth.updateUserAttributes(this.props.user, attributes)
        .then(await Auth.signOut())
        .then(await Auth.signIn(this.state.email, this.state.password))
        .then(await Auth.currentAuthenticatedUser().then(result =>{ this.props.updateUser(result)}));
        this.props.history.push('/dashboard');
    }
    catch(e){
        alert("Incorrect Password");
    }

    //alert("logged In")

  }

  render() {
    return (
      <div className="basic" data-test="login">
        <h2>Add Devices</h2>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <form onSubmit = {this.handleSubmit}>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
                <p className="h4 text-center mb-7"></p>
                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                  New Device Serial Number
                </label>
                <input
                  type="text"
                  id="id"
                  className="form-control"
                  value={this.state.id}
                  onChange={this.handleChange}
                />
                <br />
                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                  Verify Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <br />
                <div className="text-center mt-4" data-test="loginSubmit">
                  <MDBBtn color="indigo" type="submit" disabled={!this.validateForm()}>Add Device</MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default AddDevice;
