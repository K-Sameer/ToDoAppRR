import React, { Component } from 'react';
import { withRouter } from "react-router";
import {connect} from "react-redux";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
class TodoItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { visibleInput: '' };

  }

  render() {
    const { todo } = this.props;

    return (
      <div>     
      { this.state.visibleInput
        ? <><Input value={todo.text}/><Button onClick = {() => { this.setState({ visibleInput: !this.state.visibleInput }) }}>Submit</Button></>
        : <><span>{todo.text}</span><Button onClick = {() => { this.setState({visibleInput: !this.state.visibleInput}) }}>Edit</Button></>
      }
      </div>
    );
  }
}

const mapStateToProps = (state,ownProps) => {
  return { todo: state.todos.find((todo)=>{return todo.id === ownProps.match.params.id}) };
};


export default withRouter(connect(mapStateToProps)(TodoItemDetails));

