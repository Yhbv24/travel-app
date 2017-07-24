import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import LogIn from './LogIn';
import TripList from './TripList';
import CreateAccount from './CreateAccount';

class Router extends Component {
  render() {
    return (
      <div className="router">
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/create-account" component={CreateAccount} />
        <Route exact path="/trip-list" component={TripList} />
        <Footer />
      </div>
    );
  }
}

export default Router;
