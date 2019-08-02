import React, { Component } from 'react';
import './App.css';
import MyDiagram from './components/FirstDiagram';

class App extends Component {
  render() {
    return (
      <div className="App">
        <span>diagram</span>
        <div className="Diagram">
        <MyDiagram/>
        </div>
      </div>
    );
  }
}

export default App;
