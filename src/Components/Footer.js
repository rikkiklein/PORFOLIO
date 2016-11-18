import React, { Component } from 'react';
import Column1 from './Column1.js';
import Column2 from './Column2.js';
import '../CSS/Resume.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <p>&copy; Rifka Rabinowitz 2016 All Rights Reserved</p>
      </div>
    );
  }
}

export default Footer;
