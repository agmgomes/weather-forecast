import React, { Component } from 'react';

import { connect } from 'react-redux';
import { clearErrors } from '../actions/errorActions';

import { Alert } from 'reactstrap';

class ErrorAlert extends Component {
  state = {
    visible: true
  };

  onDismiss = () => {
    this.setState({ visible: false });
    this.props.clearErrors();
  };

  render() {
    return (
      <Alert color='danger' isOpen={this.state.visible} toggle={this.onDismiss}>
        {this.props.message}
      </Alert>
    );
  }
}

export default connect(null, { clearErrors })(ErrorAlert);
