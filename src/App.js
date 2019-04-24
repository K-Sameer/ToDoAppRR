import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from './actions/actionCreator';
import { InputForm } from './containers/InputForm';
import List from './containers/List';
import Paper from '@material-ui/core/Paper';

class App extends Component {
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', paddingTop: '20px'}}>
        <Paper >
          <InputForm 
            initialValue = '' 
            customAction ={this.props.addTodo} 
            buttonText = 'Add'
          />
          <List/>
        </Paper>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => { return bindActionCreators({ addTodo }, dispatch) };
export default connect(null, mapDispatchToProps)(App);


