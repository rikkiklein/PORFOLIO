import React, { Component } from 'react';
import Column1 from './Column1.js';
import Column2 from './Column2.js';
import '../CSS/Resume.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import VerticalLinearStepper from './VerticalLinearStepper.js';

class AboutMe extends Component {
  render() {
    return (
      <div className="about-outer-paper">
        <div className="time">
          <div className="logo-outer">
            <div className="logo-ga">
            </div>
            <div className="timeline-bar"></div>
          </div>
          <div className="logo-text">logo text</div>
        </div>
        <div className="time">
          <div className="logo-outer">
            <div className="logo-bc">
            </div>
            <div className="timeline-bar"></div>
          </div>
          <div className="logo-text">logo text</div>
        </div>
        <div className="time">
          <div className="logo-outer">
            <div className="logo-bc">
            </div>
          </div>
          <div className="logo-text">logo text</div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
