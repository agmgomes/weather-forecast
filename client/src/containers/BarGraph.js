import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Bar } from 'react-chartjs-2';
import BootstrapTable from 'react-bootstrap-table-next';
import ErrorAlert from './ErrorAlert';

class BarGraph extends Component {
  state = {};

  render() {
    const { weatherInfo } = this.props;
    const { error } = this.props;

    const labels = [];
    const dataPoints = [];
    const dataTable = [];
    let content =
      weatherInfo.length > 0
        ? weatherInfo.map(weatherInfo => {
            labels.push(weatherInfo.name);
            dataPoints.push(weatherInfo.temp);
            let data = {
              name: weatherInfo.name,
              temp: weatherInfo.temp,
              sunrise: weatherInfo.sunrise,
              sunset: weatherInfo.sunset
            };
            dataTable.push(data);
          })
        : null;

    const data = {
      labels,
      datasets: [
        {
          label: 'Temp',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: dataPoints
        }
      ]
    };

    const columns = [
      {
        dataField: 'name',
        text: 'City',
        sort: true
      },
      {
        dataField: 'temp',
        text: 'Temp',
        sort: true
      },
      {
        dataField: 'sunrise',
        text: 'Sunrise',
        sort: true
      },
      {
        dataField: 'sunset',
        text: 'Sunset',
        sort: true
      }
    ];

    return (
      <div className='information'>
        {error.msg.msg ? <ErrorAlert message={error.msg.msg} /> : null}
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
        <BootstrapTable
          bootstrap4='true'
          keyField='id'
          data={dataTable}
          columns={columns}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  weatherInfo: state.weather.weather,
  error: state.error
});

export default connect(mapStateToProps, null)(BarGraph);
