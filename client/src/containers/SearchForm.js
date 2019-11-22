import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import { connect } from 'react-redux';
import { fetchWeather } from '../actions/weatherActions';

class SearchForm extends Component {
  state = {};

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.fetchWeather(this.state.city);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for='city'>City</Label>
            <br />
            <Input
              type='text'
              name='city'
              id='city'
              placeholder='City name, e.g., Lisbon, London...'
              onChange={this.onChange}
            />
            <Button color='dark' block>
              Search
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default connect(null, { fetchWeather })(SearchForm);
