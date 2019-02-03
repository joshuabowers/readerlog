import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './header';
import Library from './library';

const App = props => (
  <main>
    <Header />
    <Router>
      <div>
        <Route exact path='/' component={ Library } />
        <Route path='/library' component={ Library } />
      </div>
    </Router>
  </main>
);

export default App;
