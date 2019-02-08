import React from 'react';
import MaterialButton from 'app/material-button';

const LoggedOutHeaderComponent = ({ handleLogIn }) => (
  <aside>
    <ul>
      <li><MaterialButton icon='open_in_browser' label='Log in' onClick={ handleLogIn } /></li>
      <li><MaterialButton icon='person_add' label='Sign up' disabled={ true } /></li>
    </ul>
  </aside>
);

export default LoggedOutHeaderComponent;
