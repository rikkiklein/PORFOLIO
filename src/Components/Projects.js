import React, { Component } from 'react';
import Column1 from './Column1.js';
import Column2 from './Column2.js';
import '../CSS/Resume.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Projects extends Component {
  render() {
    return (
      <div className="outer-projects">
        <div className="project1">proj 1</div>
        <div className="maroon"></div>
        <div className="project1">proj 2</div>
        <div className="maroon"></div>
        <div className="project1">proj 2</div>
        <div className="maroon"></div>
        <div className="project1">proj 2</div>
        <div className="maroon"></div>
        <div className="project1">proj 2</div>
        <div className="maroon"></div>
    </div>
    );
  }
}

export default Projects;
