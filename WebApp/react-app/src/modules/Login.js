import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { Auth } from 'aws-amplify';
import t from 'prop-types';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email :"",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
  }

  handleSubmit = async event => {
    event.preventDefault();
    try {
      await Auth.signIn(this.state.email, this.state.password);
      this.props.userHasAuthenticated(true)
      this.props.history.push("/dashboard")
      alert("Login Successful")
    }
    catch(e) {
      alert(e.message);
    }
  }

  render() {
    return (
      <div className="basic" data-test="login">
        <h2>Log In</h2>
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
                <label htmlFor="email" className="grey-text">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <br />
                <label htmlFor="password" className="grey-text">
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <div className="text-center mt-4" data-test="loginSubmit">
                  <MDBBtn color="indigo" type="submit" disabled={!this.validateForm()}>Login</MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

Login.propTypes = {
  stateVariables: t.oneOf(['email', 'password']),
  methods: t.oneOf(['validateForm', 'handleChange', 'handleSubmit'])
}

export default Login;
