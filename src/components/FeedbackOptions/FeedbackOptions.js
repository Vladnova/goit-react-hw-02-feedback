import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ value, onLeaveFeedback }) => {
  return (
    <div className={styles.containerBtn}>
      {value.map(([key]) => (
        <button
          className={styles.button}
          type="button"
          key={key}
          onClick={() => onLeaveFeedback(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  value: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default FeedbackOptions;
