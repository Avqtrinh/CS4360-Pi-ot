import React, { Component } from 'react';
import './Basic.css';
import { MDBDataTable } from 'mdbreact';


class Log extends Component {
  state = { data: {} };

  componentDidMount() {
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
                  result['Contents'].forEach(function(item,index){
                    console.log(item['Key'].substring(item['Key'].lastIndexOf('/')+1,item['Key'].length))
                    var dateTime = new Date(parseInt((item['Key'].substring(item['Key'].lastIndexOf('/')+1,item['Key'].length-1+"0"))));
                    console.log(dateTime)
                    temp['rows'].push({date:(parseInt(dateTime.getMonth())+1).toString()+"/"+dateTime.getDate()+"/"+dateTime.getFullYear(),time:dateTime.getHours()+":"+dateTime.getMinutes(),gps_coordinates:"n/a"},)
                  });
                  this.setState({data:temp});
            })
  }
  componentWillUnmount() {
    this.setState({data:[]});
  }
  render() {
    return (
          <MDBDataTable
            striped
            bordered
            hover
            data={this.state.data}
          />
    );
  }
}

export default Log;
