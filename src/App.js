import React, { Component } from 'react';
import './App.css';
import InputForm from './containers/InputForm';
import List from './containers/List';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <InputForm/>,
        <List/>,
      </div>
    );
  }
}

export default App;
