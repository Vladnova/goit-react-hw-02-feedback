import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section';
import Statistics from './Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback() {
    let numbers = Object.values(this.state);
    return numbers.reduce((acc, value) => acc + value, 0);
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }

  render() {
    const comments = Object.entries(this.state);

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          value={comments}
          onLeaveFeedback={this.leaveFeedback}
        />
        {this.countTotalFeedback() ? (
          <Statistics
            options={comments}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    );
  }
}

export default App;
