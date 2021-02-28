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
    // return values.reduce((acc, value) => acc + value[1], 0);
    let numbers = Object.values(this.state);
    return numbers.reduce((acc, value) => acc + value, 0);
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    if (!good) {
      return 0;
    }
    return Math.round((good / this.countTotalFeedback()) * 100);
    // const allTotal = total.reduce((acc, value) => acc + value[1], 0);
    // return Math.round((good[1] / allTotal) * 100);
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
