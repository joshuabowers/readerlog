import React from 'react';
import styles from './styles';

const BookComponent = ({ id, title, coverUrl, ...props }) => (
  <div id={ id } className={ styles.book }>
    <img src={ coverUrl } />
    <div className={ styles.title }>{ title }</div>
  </div>
);

export default BookComponent;
