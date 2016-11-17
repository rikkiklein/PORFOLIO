import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

/**
 * Vertical steppers are designed for narrow screen sizes. They are ideal for mobile.
 *
 * To use the vertical stepper with the contained content as seen in spec examples,
 * you must use the `<StepContent>` component inside the `<Step>`.
 *
 * <small>(The vertical stepper can also be used without `<StepContent>` to display a basic stepper.)</small>
 */
class VerticalLinearStepper extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          style={{
            backgroundColor: "#ffffff",
            color: "#4c0216",
            border: "1px solid #4c0216",
          }}
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}

        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
            style={{
              backgroundColor: "#4c0216",
              color: "#ffffff",
            }}
          />
        )}
      </div>
    );
  }

  render() {
    const {finished, stepIndex} = this.state;

    return (
      <div style={{maxWidth: 800, maxHeight: 800}}>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel>General Assembly 2016</StepLabel>
            <StepContent>
              <p>

Programming Fundamentals

Understand how to set up your development environment, work efficiently as a developer, and make your projects a success. Learn programming fundamentals, along with the basics of computing, networks, and data structures.
scrum.png
The Basics of Product Development

Define what a user should be able to do with your app, appropriately model your data, develop simple wireframes, and learn to track a collaborative development process using version control.
brackets.png
Front-End Web Development

Before you start working with cutting-edge libraries and frameworks, gain an understanding of how to write high-quality JavaScript code. Learn to build a dynamic, front-end to your web application using a modern JavaScript library, and use CSS to layout and style your application.
ror.png
Back-End Web Development

Build web applications from the ground up using Ruby on Rails, a modern web language and MVC framework. Build quality APIs using Node.js and integrate data from other apps (like Twitter or Yelp) into your project.
collaboration.png
Working with Teams

Learn to collaborate with others to produce high quality software as you work with a team to develop, maintain, change, and secure an application.
              </p>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>

          <Step>
            <StepLabel>Brooklyn College Internship</StepLabel>
            <StepContent>
              <p>

              STAR PROGRAM:
              Created a scalable PHP based web application with a MySQL back-end to track the students, teachers and courses for the STAR early college and High School Program. Developed a method for multiple users to use the application simultaneously by updating the data in real time via MySQL transactions.
              TECH: PHP, MySQL, HTML, CSS, JavaScript
              CUNY Brooklyn College - Brooklyn, NY
              TEACHER’S ASSISTANT FOR DISTINGUISHED PROFESSOR THEODORE RAPHAN Ph.D
              Appointed as a teacher’s assistant for the Computer Architecture Course.
              </p>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>

          <Step>

            <StepLabel>Brooklyn College 2012-2016</StepLabel>
            <StepContent>

              <p>
              Our Computer and Information Science Department is one of the largest — and most up-to-date — in New York.
              If computing is your life and you would like to make it your livelihood, consider this: Brooklyn College's Department of Computer and Information Science is one of the largest in metropolitan New York. Our full-time faculty consists of 30 professors, and our facilities and equipment are among the best in the city. On-campus computer hubs house more than 1,000 PCs and Macs for your use, and wireless Internet connections are available at many locations. You'll have your pick of opportunities in ever-evolving fields relevant to industrial or academic careers, such as robotics, software engineering, computing education, parallel and distributed computing, information systems and bioinformatics. The department is also an active participant in the PIMA-MFA program.

              Site updated: August 30, 2016


              Contact Information
              Department Chairperson: Yedidyah Langsam
              Deputy Chairperson (CLAS): Moshe Augenstein
              Deputy Chairperson (SGS): Joseph Thurm

              Location: 2109 Ingersoll Hall
              Phone: 718.951.5657
              Fax: 718.951.4842
              </p>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>

        </Stepper>
        {finished && (
          <p style={{margin: '20px 0', textAlign: 'center'}}>
          </p>
        )}
      </div>
    );
  }
}

export default VerticalLinearStepper;
