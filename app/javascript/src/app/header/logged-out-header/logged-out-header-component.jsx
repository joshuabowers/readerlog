import React from 'react';

const LoggedOutHeaderComponent = ({ handleLogIn }) => (
  <aside>
    <ul>
      <li><button onClick={ handleLogIn }>Log in</button></li>
      <li>Sign up</li>
    </ul>
  </aside>
);

export default LoggedOutHeaderComponent;
