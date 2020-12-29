import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Saved from './pages/Saved';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/saved' component={Saved} />
    </Switch>
  );
}

export default App;
