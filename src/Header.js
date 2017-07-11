import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styles from './css/header-styles.min.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <ul id="nav-bar">
          <li>Home</li>
          <li>Log-In</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </div>
    );
  }
}

export default Header;
