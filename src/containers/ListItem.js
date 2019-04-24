import React, { Component } from 'react';
import Button from './CustomButton';
import { Link } from 'react-router-dom'
import MaterialLi from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
export default class ListItem extends Component {
  render() {
    const {removeTodo, todo, toggleTodo} = this.props;
    return (
      <MaterialLi>
        <ListItemText primary>
          <Link to={todo.id}>
            {todo.text}
          </Link>
          <Button 
            onClick={() => removeTodo(todo.id)} 
            buttonText='Delete' />
          <Checkbox
            color="primary"
            onChange={() => toggleTodo(todo.id)}
            checked={todo.completed}
          />
        </ListItemText>
      </MaterialLi>
    );
  }
}
