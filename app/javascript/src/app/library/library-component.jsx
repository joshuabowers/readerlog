import React from 'react';
import Book from './book';
import styles from './styles';

const LibraryComponent = ({ library, ...props }) => (
  <div className={ styles.library }>
  {
    Object.entries( library ).map(
      ( [groupName, books] ) => (
        [
          <section key={ groupName } className={ styles.groupName }>
            <div>
              <h2>{ groupName }</h2>
            </div>
          </section>,
          books.map(
            book => <Book key={ book.id } id={ book.id }
                          title={ book.title } coverUrl={ book.coverUrl }/>
          )
        ]
      )
    )
  }
  </div>
);

export default LibraryComponent;
