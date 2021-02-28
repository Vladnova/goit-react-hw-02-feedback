import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
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
  //
  countTotalFeedback(values) {
    return values.reduce((acc, value) => acc + value[1], 0);
  }

  countPositiveFeedbackPercentage(good, total) {
    if (!good[1]) {
      return 0;
    }
    const allTotal = total.reduce((acc, value) => acc + value[1], 0);
    return Math.round((good[1] / allTotal) * 100);
  }

  render() {
    const comments = Object.entries(this.state);

    return (
      <div>
        <h1>Please leave feedback</h1>

        <FeedbackOptions
          value={comments}
          onLeaveFeedback={this.leaveFeedback}
        />
        <Statistics
          options={comments}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}

export default App;
