import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import t from 'prop-types';

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
      <div className = "basic" data-test="log">
          <MDBDataTable
            striped
            bordered
            hover
            data={data}
          />
      </div>
    );
  }
}

Log.propTypes = {
  data: t.oneOf(['label', 'field', 'sort', 'width']),
  rows: t.oneOf(['time', 'date', 'gps_coordinates'])
}

export default Log;