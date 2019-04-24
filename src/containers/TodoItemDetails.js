import React, {Component} from 'react';
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {InputForm} from './InputForm';
import Button from '@material-ui/core/Button';
import {bindActionCreators} from 'redux'
import {editTodo} from '../actions/actionCreator'
class TodoItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { visibleInput: '' };
    this.handleButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(event) {
    this.setState({ visibleInput: !this.state.visibleInput });
  }

  render() {
    const { todo } = this.props;
    const {handleButtonClick} = this;
    return (
      <div>     
      { this.state.visibleInput
        ? <InputForm
            initialValue = '' 
            customAction ={this.props.editTodo}
            buttonText = 'Submit'
            onBClick = {handleButtonClick}
            todoId = {todo.id}
          />
        : <>
          <span>{todo.text}</span>
          <Button onClick = {() => { this.setState({visibleInput: !this.state.visibleInput}) }}> Edit </Button>
          </>
      }
      </div>
    );
  }
}

const mapStateToProps = (state,ownProps) => {
  return { todo: state.todos.find((todo) => {return todo.id === ownProps.match.params.id}) };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      editTodo
  }, dispatch)
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TodoItemDetails));

