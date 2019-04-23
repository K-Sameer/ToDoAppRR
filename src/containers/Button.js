import React, { Component } from 'react';
// import Button as Btn from "@material-ui/core/Button";

export default class Button extends Component {  
  render() {
    return <button onClick={this.props.onClick}> {this.props.buttonText} </button>;
  }
}
