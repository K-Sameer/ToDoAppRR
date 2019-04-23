import React, {Component} from 'react';
import ListItem from "./ListItem";
import Button from '@material-ui/core/Button';
import {connect} from "react-redux";
import { List as MaterialList } from "@material-ui/core";

import {
	removeTodo,
	toggleTodo,
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
    const {removeTodo, toggleTodo, removeAllTodo, todos,setVisibilityFilter} = this.props;

    return (
      <div>
        <MaterialList>
          {
            todos ?   
              todos.map(todo =><ListItem key={todo.id} todo={todo} removeTodo={removeTodo} toggleTodo={toggleTodo}>{todo.text}</ListItem>)
              : null 
          }        
        </MaterialList>
        <Button type="submit" variant="contained" onClick={removeAllTodo}>Remove All</Button>
        <Button type="submit" variant="contained" onClick={() => setVisibilityFilter(SHOW_ALL)}>Show All</Button>
        <Button type="submit" variant="contained" onClick={() => setVisibilityFilter(SHOW_COMPLETED)}>Show Completed</Button>
        <Button type="submit" variant="contained" onClick={() => setVisibilityFilter(SHOW_ACTIVE)}>Show Active</Button>
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
        removeTodo,toggleTodo,removeAllTodo, setVisibilityFilter
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
