import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from "react-router-dom";
import App from './App';
import AppContext from './contexts/AppContext';

ReactDOM.render(
  <React.StrictMode>
    <AppContext>
      <Router>
        <App />
      </Router>
    </AppContext>
  </React.StrictMode>,
  document.getElementById('root')
);

