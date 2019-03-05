import React from 'react';
import styles from './styles';

const NotificationComponent = ({ type, message, ...props }) => {
  const classes = [ styles.notification, styles[type] ].join(' ');
  return (
    <div className={ classes } { ...props }>
      { message }
    </div>
  );
}

export default NotificationComponent;
