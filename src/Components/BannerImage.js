import React, { Component } from 'react';
import SwipeTabs            from './SwipeableViews.js';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import Resume               from './Resume.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import '../CSS/Banner.css';

 class BannerImage extends Component {

   render() {

     return (
       <div className="banner-image">
         <div className="heading">
           Designs <span className="by">By </span>Rikki Rifka 
         </div>
       </div>
     );
   }
 }

 export default BannerImage;
