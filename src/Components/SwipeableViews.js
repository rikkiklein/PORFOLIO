import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
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
        <Tabs inkBarStyle={{background: '#ff6666'}}
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab id="tab" label="Resume" value={0} />
          <Tab label="Projects" value={1} />
          <Tab label="Contact" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <Resume/>
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
