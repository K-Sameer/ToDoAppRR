import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import Button from './CustomButton';

export default class ListItem extends Component {
  render() {
    const { removeTodo, todo, toggleTodo } = this.props;
    return (
      <ListItemText primary="true">
        <Link to={String(todo.id)}>
          {todo.text}
        </Link>
        <div style={{marginLeft:"auto"}}>
        <Button
          onClick={() => removeTodo(todo.id)}
          buttonText="Delete"
        />
        <Checkbox
          color="primary"
          onChange={() => toggleTodo(todo.id)}
          checked={todo.completed}
        />
        </div>
      </ListItemText>
    );
  }
}
