import React from 'react';
import MaterialButton from 'app/material-button';

const LoggedInHeaderComponent = ({ username, toggleSearchBar, handleLogOut }) => (
  <aside>
    <ul>
      <li>{ username }</li>
      <li><MaterialButton icon='search' label='Search' onClick={ toggleSearchBar } /></li>
      <li><MaterialButton icon='power_settings_new' label='Log out' onClick={ handleLogOut } /></li>
    </ul>
  </aside>
);

export default LoggedInHeaderComponent;
