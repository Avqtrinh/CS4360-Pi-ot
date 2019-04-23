import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from 'mdbreact';

class Navigation extends Component {
  constructor(props) {
    super(props);
    console.log('Starting nav')
    console.log(props.childProps.isAuthenticated)
    var temptest = ''
    if (props.childProps.isAuthenticated){
      temptest='d-block nav-link Ripple-parent'
    }
    else (
      temptest='d-none'
    )
    this.state = {
      isOpen:false,
      email :"",
      password: "",
      visible:temptest,
      lastAuth: props.childProps.isAuthenticated
    };

  }

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}
componentDidUpdate(props){
  if(props.childProps.isAuthenticated!=this.state.lastAuth){
    console.log('render nav')
    console.log(this.props.childProps)
    var temptest = ''
    if (this.props.childProps.isAuthenticated){
      temptest='d-block nav-link Ripple-parent'
    }
    else (
      temptest='d-none'
    )
    this.setState({visible:temptest,lastAuth:props.childProps.isAuthenticated})
  }
}


render() {
  return (
    <div>
      <MDBNavbar color="indigo" dark expand="md" data-test="navigation">
        <MDBNavbarBrand>
          <strong className="white-text">Pi_oT</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink class = {this.state.visible}  to="/dashboard">Dashboard</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink class = {this.state.visible} to="/stats">Stats</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink class = {this.state.visible} to="/log">Log</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
          {this.state.lastAuth
          ? <MDBNavLink to="/logout" onClick ={this.handleLogout}> Logout </MDBNavLink>
          : <MDBNavLink to="/login">Login</MDBNavLink>
          }
          <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user"/>
                </MDBDropdownToggle>
                <MDBDropdownMenu  className="dropdown-default" color="dark" right>
                  <MDBDropdownItem>Account Details</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </div>
    );
  }
}

export default Navigation;
;
