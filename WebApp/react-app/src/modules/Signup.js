import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import './Basic.css';
import { Auth } from 'aws-amplify';

class Signup extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email :"",
      password: "",
      verifyPassword : "",
      code: "",
      submitted: false,
      newUser: null,
      id:""
    }
  }

  validateForm() {
    return (
      this.state.email === this.state.verifiedEmail && this.state.password === this.state.verifiedPassword
      && this.state.email.length > 0 && this.state.password.length >= 8
    );
  }

  validateConfirmationForm() {
    return (
      this.state.code.length > 0
    );
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
    try {
      const newUser = await Auth.signUp({
        username: this.state.email,
        password: this.state.password
      });
      alert("Check your email for a verification code")
      this.setState({
        newUser
      });

    }
    catch(e) {
      alert(e.message)
    }
  }

  handleConfirmation = async event => {
    event.preventDefault();

    try {
      await Auth.confirmSignUp(this.state.email, this.state.code);
      await Auth.signIn(this.state.email, this.state.password);
      alert("Confirmed, Welcome!");
      this.props.userHasAuthenticated(true);
      Auth.currentAuthenticatedUser().then(result => {
          this.props.updateUser(result)
      });
      this.props.history.push("/dashboard");
    }
    catch(e) {
      alert(e.message)
    }
  }


  renderConfirmationForm() {
    return(
    <div className ="basic">
      <MDBContainer>
            <MDBRow>
              <MDBCol>
                <form onSubmit = {this.handleConfirmation}>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <p className="h4 text-center mb-7"></p>
                  <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                    Input your verification code sent to your email.
                  </label>
                  <br/>
                  <input
                  type="text"
                  id="code"
                  className="form-control"
                    value={this.state.code}
                    onChange={this.handleChange}
                  />
                  <br/>
                  <div className="text-center mt-4" data-test="loginSubmit">
                    <MDBBtn color="indigo" type="submit" disabled={!this.validateConfirmationForm()}>Confirm</MDBBtn>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
    )
  }

  renderForm(){
    return (
      <div className = "basic">
        <h2>Sign Up</h2>
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
                  <MDBBtn color="indigo" type="submit" disabled={!this.validateForm()}>Sign up</MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    )
  }

  render() {
    return (
        <div>
        {this.state.newUser == null
        ? this.renderForm()
        : this.renderConfirmationForm()}
        </div>
    )
  }


}

export default Signup;
