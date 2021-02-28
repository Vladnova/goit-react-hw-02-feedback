import React from 'react';

const Statistics = ({ options, total, positivePercentage }) => (
  <>
    <h2>Statistics</h2>
    <ul>
      {options.map(([key, value]) => (
        <li key={key}>
          {key}:{value}
        </li>
      ))}
    </ul>
    <p>Total:{total(options)}</p>
    <p>Positive feedback: {positivePercentage(options[0], options)} %</p>
  </>
);

export default Statistics;

//{this.countPositiveFeedbackPercentage()}

/* 
         <h2>Statistics</h2>
        <ul>
          {comments.map(comment => (
            <li key={comment[0]}>
              {comment[0]}:{comment[1]}
            </li>
          ))}
        </ul>
        <p>Total:{this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()} %</p> */
