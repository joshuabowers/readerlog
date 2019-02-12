import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './header';
import SearchBar from './search-bar';
import LogIn from 'app/log-in';
import SignUp from 'app/sign-up';
import Library from './library';
import Welcome from './welcome';

const App = ({ isLoggedIn, ...props }) => (
  <div id='app'>
    <Header />
    <main>
      <SearchBar />
      {
        !isLoggedIn
          ? <>
              <LogIn />
              <SignUp />
            </>
          : undefined
      }
      {
        !isLoggedIn
          ? <Welcome />
          : <Router>
              <div>
                <Route exact path='/' component={ Library } />
                <Route path='/library' component={ Library } />
              </div>
            </Router>
      }
    </main>
  </div>
);

export default App;
