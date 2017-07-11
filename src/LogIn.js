import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './css/login-styles.min.css';

class LogIn extends Component {
  constructor() {
    super();
    this.state = {};
    this.getEmail = this.getEmail.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.logIn = this.logIn.bind(this);
  }
  getEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  getPassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  logIn(e) {
    e.preventDefault();
    console.log('Email: ' + this.state.email + ' Password: ' + this.state.password);
  }
  render() {
    return (
      <div className="log-in">
        <form id="log-in-form">
          <input type="text" name="email" onChange={this.getEmail} placeholder="Email" id="email" />
          <input type="text" name="password" onChange={this.getPassword} placeholder="Password" id="password" />
          <button type="submit" onClick={this.logIn} id="submit-login">Log-In</button>
          <p>Don't have an account? <Link to="/create-account">Click Here!</Link></p>
        </form>
      </div>
    );
  }
}

export default LogIn;
