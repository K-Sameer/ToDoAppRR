import React, { Component } from 'react';
import { withRouter } from "react-router";
import {connect} from "react-redux";
class TodoItemDetails extends Component {

  render() {
    const { todo } = this.props;
    return (
      <div>{todo.text}</div>
    );
  }
}

const mapStateToProps = (state,ownProps) => {
  return { todo: state.todos.find((todo)=>{return todo.id === ownProps.match.params.id}) };
};

export default withRouter(connect(mapStateToProps)(TodoItemDetails));

