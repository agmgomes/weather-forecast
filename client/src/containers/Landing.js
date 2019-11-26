import React, { Component } from 'react';

import { connect } from 'react-redux';

import SearchForm from './SearchForm';
import ErrorAlert from './ErrorAlert';

import { Spinner } from 'reactstrap';
import WeatherContainer from './WeatherContainer';

class Landing extends Component {
  render() {
    const { loading, error } = this.props;

    return (
      <div>
        <SearchForm />
        {error.msg.msg ? <ErrorAlert message={error.msg.msg} /> : null}
        {loading ? <Spinner color='primary' /> : <WeatherContainer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.weather.loading,
  error: state.error
});

export default connect(mapStateToProps, null)(Landing);
