import React, { Component } from 'react';
import Column1 from './Column1.js';
import Column2 from './Column2.js';
import '../CSS/Resume.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
          <div className="logo-text">
            <h2>General Assembly Web Development Immersive <br/> June - September 2016</h2>
            <p>General Assembly's Web Development Immersive teaches their students how to set up their development environment, work efficiently as a developer, and make their projects a success.
            </p>
            <p>The students appropriately model their data, develop simple wireframes, and learn to track a collaborative development process using version control.
            </p>
            <p>
              The students learn to build a dynamic, front-end to their web applications using a modern JavaScript library, and use CSS to layout and style their applications.
            </p>
            <p>
              In addition, the students build web applications from the ground up using Ruby on Rails, a modern web language and MVC framework. They build quality APIs using Node.js and integrate data from other apps into their projects.
            </p>
            <p>
              General Assembly students produce high quality software by collaborating with others and learn to work as a team as they develop, maintain, change and secure an application.
            </p>
            <a href={"https://generalassemb.ly/education/web-development-immersive"} target="_blank"> Learn more...</a>
          </div>
        </div>
        <div className="time">
          <div className="logo-outer">
            <div className="logo-bc">
            </div>
            <div className="timeline-bar"></div>
          </div>
          <div className="logo-text">
            <h2>Brooklyn College Internship<br/>  January 2015 - January 2016</h2>
            <h4>MYSQL/WEB DEVELOPER </h4>
            <p>
              Worked under the supervision of Distinguished Professor Theodore Raphan Ph.D to develop and maintain a scalable PHP based web application with a MySQL back-end to track the students, teachers and courses for the STAR early college and High School Program. Developed a method for multiple users to use the application simultaneously by updating the data in real time via MySQL transactions.
              <br/>TECH: PHP, MySQL, HTML, CSS, JavaScript
            </p>
            <h4>TEACHERS ASSISTANT</h4>
            <p>
              Appointed as a teacher’s assistant for the Computer Architecture Course.<br/>
            <ul>
              <li>Created examinations to test the students understanding of course material</li>
              <li>Graded all homework’s, laboratory assignments, midterm and final examinations.
              </li>
            </ul>
            </p>
          </div>
        </div>
        <div className="time">
          <div className="logo-outer">
            <div className="logo-bc">
            </div>
          </div>
          <div className="logo-text">
            <h2>Brooklyn College City University of New York  <br/> June 2012 - May 2016</h2>
            <p>Graduated with Summa Cum Laude with a Bachelors of Science in Computer and Information Science and a double minor in Accounting and Multimedia</p>
            <p>
              Brooklyn College's Department of Computer and Information Science is one of the largest in metropolitan New York. Their full-time faculty consists of 30 professors, and their facilities and equipment are among the best in the city. On-campus computer hubs house more than 1,000 PCs and Macs for their students use, and wireless Internet connections are available at many locations. The department is also an active participant in the PIMA-MFA program.
            </p>
              <a href={"http://www.brooklyn.cuny.edu/web/academics/schools/naturalsciences/undergraduate/computers.php"} target="_blank"> Learn more...</a>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
