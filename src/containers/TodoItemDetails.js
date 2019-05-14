import React, {Component} from 'react';
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {InputForm} from './InputForm';
import {bindActionCreators} from 'redux'
import {editTodo} from '../actions/actionCreator'
class TodoItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { visibleInput: '' };
    this.handleSubmitEditedTodo = this.onSubmitEditedTodo.bind(this);
    this.handleEditTodo = this.onEditTodo.bind(this);
  }
  
  onEditSubmit(){

  }

  onButtonClick(event) {
  }

  onEditTodo = () => {
    this.setState({ visibleInput: !this.state.visibleInput });
  }

  onSubmitEditedTodo = (value) => {
    this.props.editTodo(this.props.todo.id, value);
    this.setState({ visibleInput: !this.state.visibleInput });
  }

  render() {
    const { todo } = this.props;
    if (!todo) {
      return null;
    }

    return (
      <div>     
        { this.state.visibleInput ?
          <InputForm
              initialValue={todo.text}
              onSubmit={this.handleSubmitEditedTodo}
              buttonText = 'Submit'
          /> : 
          <InputForm
              initialValue={todo.text}
              onSubmit={this.handleEditTodo}
              buttonText='Edit'
              disabled
          />
        }
      </div>
    );
  }
}

const mapStateToProps = (state,ownProps) => {
  return {
    todo: state.todos.find(todo => todo.id === +ownProps.match.params.id || todo.id === ownProps.match.params.id)
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      editTodo
  }, dispatch)
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TodoItemDetails));

