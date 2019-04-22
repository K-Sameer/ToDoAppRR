import React, { Component } from 'react';
import { Button } from './Button';
import { BrowserRouter as Link } from "react-router-dom";

export class ListItem extends Component {
  render() {
    const {removeTodo, todo, completeTodo} = this.props;
    return (
      <li onClick={ () => { return <Link to = {`${todo.id}/:id`}/> } } >

        {todo.text}
        <Button onClick={() => removeTodo(todo.id)} buttonText='Delete' />
        <input
          type="checkbox"
          onChange={() => completeTodo(todo.id)}
          checked={todo.completed}
        />
      </li>
    );
    }
}
