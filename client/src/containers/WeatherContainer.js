import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Bar } from 'react-chartjs-2';
import BootstrapTable from 'react-bootstrap-table-next';

class WeatherContainer extends Component {
  state = {};

  render() {
    const { weatherInfo, fetched } = this.props;

    const labels = [];
    const dataPoints = [];
    const dataTable = [];

    if (fetched) {
      weatherInfo.map(weatherInfo => {
        labels.push(weatherInfo.name);
        dataPoints.push(weatherInfo.temp);
        let data = {
          name: weatherInfo.name,
          temp: weatherInfo.temp,
          sunrise: weatherInfo.sunrise,
          sunset: weatherInfo.sunset
        };
        dataTable.push(data);
      });
    }

    const dataBar = {
      labels,
      datasets: [
        {
          label: 'Temperature (ºC)',
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
        text: 'Temperature (ºC)',
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
        {fetched ? (
          <Bar
            data={dataBar}
            width={100}
            height={50}
            options={{
              maintainAspectRatio: false
            }}
          />
        ) : null}
        {fetched ? (
          <BootstrapTable
            bootstrap4={true}
            keyField='id'
            data={dataTable}
            columns={columns}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  weatherInfo: state.weather.weather,
  fetched: state.weather.fetched
});

export default connect(mapStateToProps, null)(WeatherContainer);
