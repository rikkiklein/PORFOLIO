import React                  from 'react';
import {Tabs, Tab}            from 'material-ui/Tabs';
import SwipeableViews         from 'react-swipeable-views';
import AboutMe                from './AboutMe.js';
import Resume                 from './Resume.js';
import Projects               from './Projects.js';
import ContactInfo            from './ContactInfo.js';
import "../CSS/Resume.css";

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },

};

export default class TabsExampleSwipeable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>

        <Tabs className="tab" inkBarStyle={{background: '#4c0216'}}
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab style = {{
            backgroundColor: "#ffffff",
            color: "#4c0216",
          }} id="tab" label="Resume" value={0} />
          <Tab style = {{
              backgroundColor: "#ffffff",
              color: "#4c0216",
            }} id="tab" label="About" value={1} />
          <Tab style = {{
            backgroundColor: "#ffffff",
            color: "#4c0216",
            }} label="Projects" value={2} />
          <Tab style = {{
            backgroundColor: "#ffffff",
            color: "#4c0216",
            }} label="Contact" value={3} />
        </Tabs>
        <SwipeableViews className="swipe"
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <Resume/>
          </div>
          <div>
            <AboutMe/>
          </div>
          <div style={styles.slide}>
            <Projects/>
          </div>
          <div style={styles.slide}>
            <ContactInfo/>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}
