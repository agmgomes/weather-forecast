import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from './store/store';

import Landing from './containers/Landing';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <h1>Weather Forecast</h1>
          <Landing />
        </div>
      </Provider>
    );
  }
}

export default App;
