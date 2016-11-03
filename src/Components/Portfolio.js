import React, { Component } from 'react';
import SwipeTabs            from './SwipeableViews.js';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import Resume               from './Resume.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    textColor: '#f44f55',
  },
  appBar: {
    height: 30,
    fontSize: 2,
    color: ' #fefefe',
    canvasColor: '#ff5544',
  },
});
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
