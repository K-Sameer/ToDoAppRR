/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions/actionCreator';


class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(event) {
    event.persist();
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTodo(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    const {handleSubmit, handleChange, state: { value } } = this;
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => { return bindActionCreators({ addTodo }, dispatch) };
export default connect(null, mapDispatchToProps)(InputForm);
