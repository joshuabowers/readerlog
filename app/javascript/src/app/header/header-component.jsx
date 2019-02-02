import React from 'react';
import LoggedInHeader from './logged-in-header';
import LoggedOutHeader from './logged-out-header';
import Styles from './styles';

const HeaderComponent = ({ isLoggedIn }) => (
  <header>
    <h1>ReaderLog</h1>
    {
      isLoggedIn
        ?  <LoggedInHeader />
        :  <LoggedOutHeader />
    }
  </header>
);

export default HeaderComponent;
