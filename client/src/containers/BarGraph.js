import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Bar } from 'react-chartjs-2';

class BarGraph extends Component {
  state = {};

  render() {
    const { weatherInfo } = this.props;

    // const content =
    //   weatherInfo.length > 0
    //     ? weatherInfo.map((weatherInfo, index) => <h1>{weatherInfo.name}</h1>)
    //     : null;
    const labels = [];
    const dataPoints = [];
    const content =
      weatherInfo.length > 0
        ? weatherInfo.map((weatherInfo, index) => {
            labels.push(weatherInfo.name);
            dataPoints.push(weatherInfo.temp);
          })
        : null;

    const data = {
      labels: labels,
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  weatherInfo: state.weather.weather
});

export default connect(mapStateToProps, null)(BarGraph);
