import React from 'react';

const LoggedInHeaderComponent = ({ username, handleLogOut }) => (
  <aside>
    <ul>
      <li>{ username }</li>
      <li>Search</li>
      <li><button onClick={ handleLogOut }>Log out</button></li>
    </ul>
  </aside>
);

export default LoggedInHeaderComponent;
