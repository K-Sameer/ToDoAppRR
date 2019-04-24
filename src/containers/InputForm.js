import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

export class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.initialValue };
    this.handleChange = this.onChange.bind(this);
    this.handleSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    event.persist();
    this.setState({ value: event.target.value });
  }
  
  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
    if (this.props.clearOnSubmit) {
      this.setState({ value: '' });
    }
  }

  render() {
    const {handleSubmit, handleChange, state: { value }} = this;
    
    return (
      <form onSubmit={handleSubmit} style={{display:'flex', justifyContent: 'center'}}>
        <Input
          multiline
          type="text"
          value={value}
          onChange={handleChange}
          disabled={this.props.disabled}
        />
        <Button 
          type="submit"
          variant="contained" 
          color="primary" 
          onClick={this.props.onBClick}> {this.props.buttonText}
        </Button>
      </form>
      
    );
  }
}


