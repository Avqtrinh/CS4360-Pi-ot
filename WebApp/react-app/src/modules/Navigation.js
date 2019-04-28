import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon , MDBRow } from 'mdbreact';
import { Auth } from 'aws-amplify';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen:false,
      email :"",
      password: "",
    };
  }

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

handleLogout = async event => {
  try {
     await Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));
    this.props.childProps.userHasAuthenticated(false)
  }
  catch(e) {
    alert(e.message);
  }
}

render() {
  return (
    <div>
      <MDBNavbar color="indigo" dark expand="md" data-test="navigation">
        <MDBNavbarBrand>
        <strong className="white-text">Pi-oT</strong>

        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        {this.props.childProps.isAuthenticated &&
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink  to="/dashboard">Dashboard</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/stats">Stats</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/log">Log</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        }
          <MDBNavbarNav right>
          {this.props.childProps.isAuthenticated
            ? <MDBNavLink to="/logout" onClick ={this.handleLogout}> Logout </MDBNavLink>
            : <MDBRow>
                <MDBNavLink to='/signup'>Sign up</MDBNavLink>
                <MDBNavLink to="/login">Login</MDBNavLink>
              </MDBRow>
          }
          {this.props.childProps.isAuthenticated &&
          <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user"/>
                </MDBDropdownToggle>
                <MDBDropdownMenu  className="dropdown" color="dark" right>
                  <MDBDropdownItem>
                    <MDBNavLink to ='/addDevice'> <font size = '3' color = 'black'> Add Devices </font> </MDBNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBNavLink to =""> <font size = '3' color = 'black'>Account Details </font ></MDBNavLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          }
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </div>
    );
  }
}

export default Navigation;
