import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ options, total, positivePercentage }) => (
  <div>
    <h2 className={styles.titleStatistic}>Statistics</h2>
    <ul className={styles.list}>
      {options.map(([key, value]) => (
        <li className={styles.item} key={key}>
          {key}:{value}
        </li>
      ))}
    </ul>
    <p className={styles.miniTitle}>Total:{total}</p>
    <p className={styles.miniTitle}>
      Positive feedback: {positivePercentage} %
    </p>
  </div>
);

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Statistics;
