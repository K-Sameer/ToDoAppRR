import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";

export class TodoItemDetails extends Component {  
  render() {
    const {todo} = this.props;
    return <div>{console.log(todo)}</div>;
  }
}
