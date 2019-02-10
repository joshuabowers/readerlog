import React from 'react';
import Book from './book';
import styles from './styles';

const LibraryComponent = ({ library, ...props }) => (
  <div className={ styles.library }>
  {
    Object.entries( library ).map(
      ( [groupName, books] ) => (
        <section key={ groupName } className={ styles.groupedBooks }>
          <h2 className={ styles.groupName }>{ groupName }</h2>
          <div className={ styles.books }>
          {
            books.map(
              book => <Book key={ book.id } id={ book.id }
                            title={ book.title } coverUrl={ book.coverUrl }/>
            )
          }
          </div>
        </section>
      )
    )
  }
  </div>
);

export default LibraryComponent;
