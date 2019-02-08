import React from 'react';
import styles from './styles';
import hint from 'hint.css';

const MaterialButtonComponent = ({ icon, label, ...props }) => {
  const classes = [
    'material-icons',
    styles.material,
    label && hint['hint--bottom'],
    label && hint['hint--bounce'],
    label && hint['hint--rounded']
  ].join(' ');
  return (
    <button className={ classes } aria-label={ label } {...props}>
      { icon }
    </button>
  )
}

export default MaterialButtonComponent;
