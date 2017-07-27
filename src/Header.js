import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './css/header-styles.min.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <ul id="nav-bar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/trip-list">Your Trips</Link></li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </div>
    );
  }
}

export default Header;
