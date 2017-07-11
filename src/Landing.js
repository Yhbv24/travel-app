import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './css/landing-styles.min.css';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <Header />
        <p>TEST</p>
        <Footer />
      </div>
    );
  }
}

export default Landing;
