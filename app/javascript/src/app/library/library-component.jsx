import React from 'react';
import Book from './book';
import styles from './styles';

const LibraryComponent = ({ library, ...props }) => (
  <div className={ styles.library }>
  {
    Object.entries( library ).map(
      ( [groupName, books] ) => (
        [
          <div key={ groupName } className={ styles.groupName }>
            <h2>
              <span>{ groupName }</span>
            </h2>
          </div>,
          books.map(
            book => <Book key={ book.id } id={ book.id }
                          title={ book.title } coverUrl={ book.coverUrl }/>
          )
        ]
      )
    ).flat()
  }
  </div>
);

export default LibraryComponent;
