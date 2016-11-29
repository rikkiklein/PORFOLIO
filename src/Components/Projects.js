import React, { Component } from 'react';
import Column1 from './Column1.js';
import Column2 from './Column2.js';
import '../CSS/Resume.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Projects extends Component {
  render() {
    return (
      <div className="outer-projects">
        <a className="project1" href={"https://gentle-waters-71149.herokuapp.com/"} target="_blank"></a>
        <div className="maroon"></div>
        <a className="project2" href={"https://rikkirabz.github.io/API_PROJECT2_FE/"} target="_blank"></a>
        <div className="maroon"></div>
        <a className="project3" href={"https://rikkirabz.github.io/Math-Trivia/"} target="_blank"></a>
        <div className="maroon"></div>
        </div>
    );
  }
}

export default Projects;
