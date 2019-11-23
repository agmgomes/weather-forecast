import React, { Component } from 'react';

import { connect } from 'react-redux';

import { clearErrors } from '../actions/errorActions';

import { Bar } from 'react-chartjs-2';
import BootstrapTable from 'react-bootstrap-table-next';

class BarGraph extends Component {
  state = {};

  render() {
    const { weatherInfo } = this.props;

    const labels = [];
    const dataPoints = [];
    const dataTable = [];
    let content =
      weatherInfo.length > 0
        ? weatherInfo.map((weatherInfo, index) => {
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
      <div>
        <Bar
          data={data}
          width={10}
          height={250}
          options={{
            responsive: true,
            maintainAspectRatio: false
          }}
        />
        <BootstrapTable keyField='id' data={dataTable} columns={columns} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  weatherInfo: state.weather.weather
});

export default connect(mapStateToProps, { clearErrors })(BarGraph);
