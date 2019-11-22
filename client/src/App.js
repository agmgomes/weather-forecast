import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from './store/store';

import SearchForm from './containers/SearchForm';
import BarGraph from './containers/BarGraph';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <h1>Hello World</h1>
          <SearchForm />
          <BarGraph />
        </div>
      </Provider>
    );
  }
}

export default App;
