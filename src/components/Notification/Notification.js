import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ message }) => (
  <h2 className={styles.subTitle}>{message}</h2>
);

Notification.defaultProps = {
  message: 'No comments',
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
