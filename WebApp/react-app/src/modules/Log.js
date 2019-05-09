import React, { Component } from 'react';
import './Basic.css';
import { MDBDataTable } from 'mdbreact';


class Log extends Component {
  state = { data: {} };

  componentDidMount() {
    var props = this.props
        if(this.props.isAuthenticated &&this.props.user !=null && this.props.user.attributes['custom:DeviceID'] != null){
        fetch('http://localhost:3001/api_logPing')
            .then(res => res.json())
            .then(
              (result) => {
                  var temp =  {
                      columns: [
                        {
                          label: 'Date',
                          field: 'date',
                          sort: 'asc',
                          width: 75
                        },
                        {
                          label: 'Time',
                          field: 'time',
                          sort: 'asc',
                          width: 75
                        },
                        {
                          label: 'GPS coordinates',
                          field: 'gps_coordinates',
                          sort: 'asc',
                          width: 125
                        }
                      ],
                      rows: [
                      ]
                  };
                  result.forEach(function(item,index){
                    console.log(item['deviceid'])
                    console.log(props.user.attributes['custom:DeviceID'])
                    if(item["deviceid"] === props.user.attributes['custom:DeviceID']){
                      var dateTime = new Date(parseInt((item['Key'].substring(item['Key'].lastIndexOf('/')+1,item['Key'].length-1+"0"))));
                      temp['rows'].push({date:(parseInt(dateTime.getMonth())+1).toString()+"/"+dateTime.getDate()+"/"+dateTime.getFullYear(),time:dateTime.getHours()+":"+dateTime.getMinutes(),gps_coordinates:"n/a"},)
                    }
                  });
                  this.setState({data:temp,user:this.props.user});
            })
          }
  }
  componentWillUnmount() {
    this.setState({data:[]});
  }
  render() {
    return (
      <div data-test="log">
          <MDBDataTable
            striped
            bordered
            hover
            data={this.state.data}
          />
      </div>
    );
  }
}

export default Log;
