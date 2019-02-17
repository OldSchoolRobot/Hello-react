import React, { Component } from 'react';
import {Header, List, Detail, Add} from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="column">
        <Header />
        <div className="row">
        <List />
        <Detail />
        </div>
      </div>
    );
  }
}

export default App;
