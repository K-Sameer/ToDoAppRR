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
    const {todoId} = this.props;
    this.props.customAction(todoId,this.state.value);
    this.setState({ value: '' });
  }

  render() {
    const {handleSubmit, handleChange,  state: { value }} = this;
    return (
      <form onSubmit={handleSubmit} style={{display:'flex', justifyContent: 'center'}}>
        <Input
          multiline
          type="text"
          value={value}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary" >{this.props.buttonText}</Button>
      </form>
      
    );
  }
}


