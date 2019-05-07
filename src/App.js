import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Paper from '@material-ui/core/Paper';
import { addTodo, fetchInitialTodos } from './actions/actionCreator';
import { InputForm } from './containers/InputForm';
import List from './containers/List';

class App extends Component {

  componentDidMount(){
    console.log('COMPONENT DID MOUNT');
    this.props.fetchInitialTodos();
  }

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
        <Paper>
          <InputForm
            initialValue=""
            onSubmit={this.props.addTodo}
            buttonText="Add"
            clearOnSubmit
          />
          <List />
        </Paper>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ addTodo, fetchInitialTodos  }, dispatch);
export default connect(null, mapDispatchToProps)(App);
