import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ value, onLeaveFeedback }) => {
  return value.map(([key]) => (
    <button type="button" key={key} onClick={() => onLeaveFeedback(key)}>
      {key}
    </button>
  ));
};

FeedbackOptions.defaultProps = {
  value: [],
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  // value: PropTypes.arrayOf(PropTypes.string),
};

export default FeedbackOptions;
