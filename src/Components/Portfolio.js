import React, { Component } from 'react';
import SwipeTabs            from './SwipeableViews.js';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import Resume               from './Resume.js';

 class Portfolio extends Component {
   render() {
     return (
       <div className="App">
        <MuiThemeProvider>
          <div>
            <SwipeTabs/>
          </div>
        </MuiThemeProvider>
       </div>
     );
   }
 }

 export default Portfolio;
