import React, { Component } from 'react';
import './CSS/App.css';
import Resume from './Components/Resume.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Resume/>
      </div>
    );
  }
}

export default App;
