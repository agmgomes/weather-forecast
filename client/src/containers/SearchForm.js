import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';

import { connect } from 'react-redux';
import { fetchWeather } from '../actions/weatherActions';
import { clearErrors } from '../actions/errorActions';

class SearchForm extends Component {
  state = {};

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.clearErrors();
    this.props.fetchWeather(this.state.city);
  };

  render() {
    return (
      <div className='search-form'>
        <Container>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for='city'>
                Search at least 3 cities (max: 10 cities){' '}
              </Label>
              <br />
              <Input
                type='text'
                name='city'
                id='city'
                placeholder='City name, e.g., Lisbon, London...'
                onChange={this.onChange}
              />
              <Button color='dark' style={{ marginTop: '1rem' }}>
                Search
              </Button>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}

export default connect(null, { fetchWeather, clearErrors })(SearchForm);
