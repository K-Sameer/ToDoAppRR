import React, {Component} from 'react';
import {ListItem} from "./ListItem";
import {Button} from './Button';
import {connect} from "react-redux";

import {
	removeTodo,
	completeTodo,
	removeAllTodo,
	setVisibilityFilter
	} from '../actions/actionCreator'

import {
	SHOW_ALL,
	SHOW_COMPLETED,
	SHOW_ACTIVE
	} from "../actions/actionTypes";

import {bindActionCreators} from 'redux'

class List extends Component {

  render() {
    const {removeTodo, completeTodo, removeAllTodo, todos,setVisibilityFilter} = this.props;
    console.log(this.props)

    return (
      <div>
        <ul>
          {
            todos ?   
            todos.map(todo => <ListItem
                todo={todo}
                key={todo.id}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
              />)
            : null 
          }        
        </ul>
        <Button onClick={removeAllTodo} buttonText='Delete All'/>
		<Button onClick={() => setVisibilityFilter(SHOW_ALL)} buttonText='Show All'/>
		<Button onClick={() => setVisibilityFilter(SHOW_COMPLETED)} buttonText='Show Completed'/>
		<Button onClick={() => setVisibilityFilter(SHOW_ACTIVE)} buttonText='Show Active'/>
      </div>
    );
  }
}

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
	  case SHOW_ALL:
		return todos;
	  case SHOW_COMPLETED:
		return todos.filter(t => t.completed);
	  case SHOW_ACTIVE:
		return todos.filter(t => !t.completed);
	  default:
		throw new Error("Unknown filter: " + filter);
	}
  };
  

const mapStateToProps = state => {
    return { todos: getVisibleTodos(state.todos, state.visibilityFilter) };
  };

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        removeTodo,completeTodo,removeAllTodo, setVisibilityFilter
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
