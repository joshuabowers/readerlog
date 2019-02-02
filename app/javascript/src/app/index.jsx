import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Library from './library';

const App = props => (
  <Router>
    <div>
      <Route exact path='/' component={ Library } />
      <Route path='/library' component={ Library } />
    </div>
  </Router>
);

export default App;
