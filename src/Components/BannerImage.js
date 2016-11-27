import React, { Component } from 'react';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import Resume               from './Resume.js';
import getMuiTheme          from 'material-ui/styles/getMuiTheme';
import autoPlay             from 'react-swipeable-views/lib/autoPlay';
import AboutMe              from './AboutMe.js';
import Projects             from './Projects.js';
import ContactInfo          from './ContactInfo.js';
import Drawer               from './Drawer.js';
import Portfolio            from './Portfolio.js';

import '../CSS/Banner.css';

class BannerImage extends Component {

   render() {

     return (
       <div className="outer">
         <Portfolio/>

           <div className="banner-image">

             <div className="outer-heading">
               <div className="heading">
                 Designs <span className="by">By </span>Rikki Rifka
               </div>
              </div>
           </div>
           <div className="resume-tab">
             <Resume/>
           </div>
           <div className="grad-image">
             <div className="outer-heading">
               <div className="heading">
                 Education <span className="by-grad">History</span>
               </div>
              </div>
           </div>
           <div className="about-tab">
             <AboutMe/>
           </div>
           <div className="projects-image">
             <div className="outer-heading">
               <div className="heading">
                 My <span className="by">Projects</span>
               </div>
              </div>
           </div>
           <div className="project-tab">
             <Projects/>
           </div>
           <div className="contact-tab">
             <ContactInfo/>
           </div>
       </div>

     );
   }
 }

 export default BannerImage;
