import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBNavLink } from 'mdbreact';
import './Basic.css';
import { Auth } from 'aws-amplify';

class Signup extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email :"",
      verifiedEmail : "",
      password: "",
      verifiedPassword : "",
      submitted: false,
      code:""
    };
  }

  validateForm(){
      return this.state.email === this.state.verifiedEmail && this.state.password === this.state.verifiedPassword
          && this.state.email.length > 0 && this.state.password.length >= 8
  }
  handleVerification = async event => {
    console.log("VERIFIED")
    var user = this.state.email
    var code = this.state.code
    Auth.confirmSignUp(user, code, {
  // Optional. Force user confirmation irrespective of existing alias. By default set to True.
      forceAliasCreation: false
    }).then(data => console.log(data))
      .catch(err => console.log(err));
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    var email = this.state.email
    var username = email
    var password = this.state.password
    console.log("email: "+ email)
    try{
      this.setState({
        submitted:true
      })
      //Used Tutorial and code from tutorial here https://aws-amplify.github.io/docs/js/authentication
      await Auth.signUp({
        username,
        password,
        attributes:{
            email
        }
      })
      .then(data => console.log(data))
      .catch(err => alert(err.message));
/*
      Auth.resendSignUp(username).then(() => {
        console.log('code resent successfully');
      }).catch(e => {
        console.log(e);
      });
*/
    }
    catch(e){
      alert(e.message);
    }
  }

  render(){
    return (
      <div className = "basic">
        <h2>Sign Up</h2>
        {this.state.submitted
        ?<MDBContainer>
          <MDBRow>
            <MDBCol>
              <form onSubmit = {this.handleVerification}>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <p className="h4 text-center mb-7"></p>
                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                  Input your verification code sent to your email.
                </label>
                <br/>
                <input
                  type = "text"
                  id = "code"
                  className = "formControl"
                  value={this.state.code}
                  onChange={this.handleChange}
                />
                <br/>
                <div className="text-center mt-4" data-test="loginSubmit">
                  <MDBBtn color="indigo" type="submit">Submit</MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        :<MDBContainer>
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
                  Your email
                </label>
                <br/>
                <input
                  type = "email"
                  id = "email"
                  className = "formControl"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <br/>
                <br/>
                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                  Verify your email
                </label>
                <br/>
                <input
                  type = "email"
                  id = "verifiedEmail"
                  className = "formControl"
                  value={this.state.verifiedEmail}
                  onChange={this.handleChange}
                />
                <br/>
                <br/>
                <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                  Your password
                </label>
                <br/>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <br/>
                <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                  Verify your password
                </label>
                <br/>
                <input
                  type="password"
                  id="verifiedPassword"
                  className="form-control"
                  value={this.state.verifiedPassword}
                  onChange={this.handleChange}
                />
                <div className="text-center mt-4" data-test="loginSubmit">
                  <MDBBtn color="indigo" type="submit" disabled={!this.validateForm()}>Signup</MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      }
      </div>
    )
  }
}

export default Signup;
