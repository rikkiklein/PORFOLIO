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

    </div>
    );
  }
}

export default AboutMe;


/*
<div className="about-outer">
  <div className="github"></div>
  <div className="personal-message">
    I am a Frontend Web Developer who
    loves utilizing my creativity and
     hardworking skills to ensure the
     best outcome possible. Let's connect!
  </div>

</div>

Education:
<VerticalLinearStepper/>
*/
