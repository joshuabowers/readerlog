import React from 'react';
import styles from './styles';

const SearchBarComponent = ({ isVisible, query, handleSearch, ...props }) => (
  <div id={ styles.searchBar }
       className={ isVisible ? undefined : styles.hidden } >
    <label>
      Search
      <input type='search' selected={ true } value={ query } onChange={ handleSearch } />
    </label>
  </div>
);

export default SearchBarComponent;
