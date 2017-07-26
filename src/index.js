import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render((
  <BrowserRouter>
    <Router />
  </BrowserRouter>
), document.getElementById('root'));
