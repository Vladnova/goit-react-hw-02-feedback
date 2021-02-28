import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => <h2>{message}</h2>;

Notification.defaultProps = {
  message: 'No comments',
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
