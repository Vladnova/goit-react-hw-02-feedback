import React from 'react';
import PropTypes from 'prop-types';

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
    <p>Total:{total}</p>
    <p>Positive feedback: {positivePercentage} %</p>
  </>
);

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  // options:
};

export default Statistics;
