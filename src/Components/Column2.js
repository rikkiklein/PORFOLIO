import React, { Component } from 'react';
import '../CSS/Resume.css';

class Column2 extends Component {
  render() {
    return (
      <div className="App">
        <div className="col2-outer-container">
          <div className="info">
            (917) 574-1120 <br/>
            rifkarabinowitz@gmail.com <br/>
            LinkedIn: <a href={"https://www.linkedin.com/in/rifkarabinowitz"} target="_blank"> rifkarabinowitz</a> <br/>
            GitHub: <a href={"https://github.com/rikkirabz"} target="_blank"> rikkirabz</a> <br/>
            General Assembly: <a href={"https://profiles.generalassemb.ly/profiles/rifka-rabinowitz"} target="_blank">rifka-rabinowitz</a>
        </div>
          <div className="skills">
          <h2>Skills</h2>
          <p>
            Web Development:<br/>
            HTML5, CSS, JavaScript, React.JS, JQuery, AJAX, JSON
          </p>
          <p>
            Back-End: <br/>
            Node.JS, MongoDB, Ruby, Ruby on rails
          </p>
          <p>
            Programming: <br/>
            MySQL, PHP, Java, C++
          </p>
          <p>
            Development Tools: <br/>
            Git, GitHub, MySQL Workbench, Eclipse, Android Studio, Atom
          </p>
        </div>
      </div>
    </div>
    );
  }
}

export default Column2;
