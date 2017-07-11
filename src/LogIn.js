import React, { Component } from 'react';
import styles from './css/login-styles.min.css';

class LogIn extends Component {
  constructor() {
    super();
    this.state = {};
    this.getEmail = this.getEmail.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.logIt = this.logIt.bind(this);
  }
  getEmail(e) {
    this.setState = ({
      email: e.target.event
    });
  }
  getPassword(e) {
    this.setState = ({
      password: e.target.event
    });
  }
  logIt(e) {
    e.preventDefault();
    console.log(this.state.email);
  }
  render() {
    return (
      <div className="log-in">
        <form>
          <input type="text" name="email" onChange={this.getEmail} placeholder="Email"/>
          <input type="text" name="password" onChange={this.getPassword} placeholder="Password"/>
          <button type="submit" onClick={this.logIt}>Log-In</button>
        </form>
      </div>
    );
  }
}

export default LogIn;
