import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class CustomButton extends Component {
  render() {
    return (
      <Button
        variant="contained"
        color="secondary"
        onClick={this.props.onClick}
      >
        {this.props.buttonText}
      </Button>
    );
  }
}
