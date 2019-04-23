import React, { Component } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom'
import MaterialLi from '@material-ui/core/ListItem';

export default class ListItem extends Component {
  render() {
    const {removeTodo, todo, toggleTodo} = this.props;
    return (
      <MaterialLi>
        <Link to={todo.id}>{todo.text}</Link>
        <Button onClick={() => removeTodo(todo.id)} buttonText='Delete' />
        <input
          type="checkbox"
          onChange={() => toggleTodo(todo.id)}
          checked={todo.completed}
        />
      </MaterialLi>
    );
  }
}
