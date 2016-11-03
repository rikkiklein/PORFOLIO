import React, { Component } from 'react';
import Column1 from './Column1.js';
import Column2 from './Column2.js';
import '../CSS/Resume.css';

class Resume extends Component {
  render() {
    return (
      <div className="App">
        <div className="outer-container">
          <div className="column1"><Column1/></div>
          <div className="column2"><Column2/></div>
        </div>
      </div>
    );
  }
}

export default Resume;
