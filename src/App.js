import React, { Component } from 'react';
import './App.css';
import InputForm from './containers/InputForm';
import List from './containers/List';
import Paper from '@material-ui/core/Paper';

class App extends Component {
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', paddingTop: '20px'}}>
        <Paper >
          <InputForm/>
          <List/>
        </Paper>
      </div>
    );
  }
}

export default App;
