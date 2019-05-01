import React, { Component } from 'react';
import './Basic.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer, MDBRow } from 'mdbreact';

class Dashboard extends Component {
  constructor(props){
    super(props)

      this.state = {
        didLoad: false,
        text: "",
        load: <span className="spinner-grow" role="status">
                <span className="sr-only"></span>
              </span>
      }
  }


  componentDidMount() {
    var props = this.props;
    if(this.props.isAuthenticated &&this.props.user !=null && this.props.user.attributes['custom:DeviceID'] != null){
    this.interval = setInterval(() =>
      fetch('http://localhost:3001/api_logPing')
          .then(res => res.json())
          .then(
            (result) => {

                var newest = 0
                result.forEach(function(item,index){
                  var dateTime = new Date(parseInt((item['Key'].substring(item['Key'].lastIndexOf('/')+1,item['Key'].length-1+"0"))));
                  if (dateTime.getTime() > newest && item["deviceid"] === props.user.attributes['custom:DeviceID']){
                    newest = dateTime
                  }
                });
                try{
                  if(newest !== 0){
                    var newText = "Last Motion: "+(parseInt(newest.getMonth())+1).toString()+'/'+newest.getDate()+"/"+newest.getFullYear()+' '+newest.getHours()+':'+newest.getMinutes();
                  } else {
                    newText = "No Data Found"
                  }
                }
                catch (e){
                  newText = "An error occured please reload the page."
                }
                this.setState({
                  didLoad: true,
                  load: "",
                  text: newText,
                });
              }
          ),2000);
      }
  }
  componentDidUpdate(){
    console.log(this.props.user.attributes['custom:DeviceID'])
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
                  <MDBCardTitle>User's Pi ID: {this.props.user.attributes['custom:DeviceID']}</MDBCardTitle>
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
