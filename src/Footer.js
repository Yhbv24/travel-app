import React, { Component } from 'react';
import styles from './css/footer-styles.min.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <h4>© Ash Laidlaw, 2017</h4>
        <ul>
          <a href="https://github.com/Yhbv24"><li>GitHub</li></a>
          <a href="https://www.linkedin.com/in/ash-laidlaw/"><li>LinkedIn</li></a>
          <a href="https://www.facebook.com/ashlaidlaw1"><li>Facebook</li></a>
        </ul>
      </div>
    );
  }
}

export default Footer;
