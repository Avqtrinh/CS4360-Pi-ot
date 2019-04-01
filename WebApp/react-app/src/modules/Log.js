import React, { Component } from 'react';
import './Basic.css';
import { MDBDataTable } from 'mdbreact';

  const data = {
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
      {
        date: '3-19-19',
        time: '12:34 PM',
        gps_coordinates: '39.744, -105.008' 
      },
      {
        date: '3-19-19',
        time: '12:34 PM',
        gps_coordinates: '39.744, -105.008' 
      },
      {
        date: '3-19-19',
        time: '12:34 PM',
        gps_coordinates: '39.744, -105.008' 
      }
    ]
};

class Log extends Component {
  render() {
    return (
          <MDBDataTable
            striped
            bordered
            hover
            data={data}
          />
    );
  }
}

export default Log;