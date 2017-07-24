import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreateAccount extends Component {
  constructor() {
    super();
    this.state = {};
    this.getEmail = this.getEmail.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.createAccount = this.createAccount.bind(this);
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
  createAccount(e) {
    e.preventDefault();
    console.log('Email: ' + this.state.email + ' Password: ' + this.state.password);
  }
  render() {
    return (
      <div className="create-account">
        <form id="create-account-form">
          <input type="text" name="email" onChange={this.getEmail} placeholder="Email" id="email" />
          <input type="text" name="password" onChange={this.getPassword} placeholder="Password" id="password" />
          <button type="submit" onClick={this.createAccount} id="submit-create">Create Account</button>
          <p>Already have an account? <Link to="/login">Click Here!</Link></p>
        </form>
      </div>
    );
  }
}

export default CreateAccount;
