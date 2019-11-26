# Weather Forecast Application

A simple weather forecast application.

Check [here](https://weather-app-gomes.herokuapp.com/) the live version on heroku.

## Features

Show the data (temperature, sunrise and sunset) on a bar chart and on a table.

### Example

![alt text](https://raw.githubusercontent.com/agmgomes/weather-forecast/master/img/weather1.png)
![alt text](https://raw.githubusercontent.com/agmgomes/weather-forecast/master/img/weather2.png)

## Installation

Make you sure you have installed [Node.js](https://nodejs.org/) at least version v12.13.0.

- Clone this repository
- Run `npm install` at root folder and `npm client-install` to install all dependencies
- At root folder run `npm run server` to run the server and `npm run client` to run the client or `npm run dev` to run just both server and client

### API Key from OpenWeatherMap

This application uses the [OpenWeatherMap API](http://openweathermap.org/api). To get your own API key just visit the website and register.

To add your API key just change in the `config/default.json` file.

### Usage

Just run in your browser `http://localhost:3000` after run the scripts.

### Dependencies

- [Express.js](https://github.com/expressjs/express)
- [Axios](https://github.com/axios/axios)
- [@Hapi/Joi](https://github.com/hapijs/joi)
- [Morgan](https://github.com/expressjs/morgan)
- [Winston](https://github.com/winstonjs/winston)
- [Concurrently](https://github.com/kimmobrunfeldt/concurrently)
- [Config](https://github.com/lorenwest/node-config)
- [React.js](https://github.com/reactjs/reactjs.org)
- [React-Redux](https://github.com/reduxjs/react-redux)
- [Reactstrap](https://github.com/reactstrap/reactstrap)
- [React-Chartjs](https://github.com/jerairrest/react-chartjs-2)
- [React-bootstrap-table2](https://github.com/react-bootstrap-table/react-bootstrap-table2)
