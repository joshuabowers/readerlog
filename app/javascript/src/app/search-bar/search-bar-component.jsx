import React from 'react';
import styles from './styles';

const SearchBarComponent = ({ query, handleSearch, ...props }) => (
  <div id={ styles.searchBar }>
    <label>
      Search
      <input type='search' selected={ true } value={ query } onChange={ handleSearch } />
    </label>
  </div>
);

export default SearchBarComponent;
