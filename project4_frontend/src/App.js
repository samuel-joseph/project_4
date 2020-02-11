import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import styles from './App.css';

import Main from './components/main.js'


class App extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
