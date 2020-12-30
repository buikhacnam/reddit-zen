import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Saved from './pages/Saved';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/saved' component={Saved} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
