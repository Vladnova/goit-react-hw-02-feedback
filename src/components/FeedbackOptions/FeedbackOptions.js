import React from 'react';

const FeedbackOptions = ({ value, onLeaveFeedback }) => {
  return value.map(([key]) => (
    <button type="button" key={key} onClick={() => onLeaveFeedback(key)}>
      {key}
    </button>
  ));
};

export default FeedbackOptions;

// {
//   comments.map(comment => (
//     <button
//       type="button"
//       key={comment[0]}
//       onClick={() => this.leaveFeedback(comment[0])}
//     >
//       {comment[0]}
//     </button>
//   ));
// }
