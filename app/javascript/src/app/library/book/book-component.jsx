import React from 'react';
import styles from './styles';

const BookComponent = ({ id, title, coverUrl, handleImageLoad, ...props }) => (
  <div id={ id } className={ styles.book }>
    <img src={ coverUrl } onLoad={ handleImageLoad } />
    <div className={ styles.title }>{ title }</div>
  </div>
);

export default BookComponent;
