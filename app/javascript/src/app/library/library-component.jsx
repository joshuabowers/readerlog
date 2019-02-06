import React from 'react';
import Book from './book';
import styles from './styles';

const LibraryComponent = ({ books, ...props }) => (
  <div className={ styles.library }>
  {
    books.map(
      book => <Book key={ book.id } id={ book.id }
                    title={ book.title } coverUrl={ book.coverUrl }/>
    )
  }
  </div>
);

export default LibraryComponent;
