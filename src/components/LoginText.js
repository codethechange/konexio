import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/LoginText.css';

export class LoginText extends Component {
  render () {
    return (
      <React.Fragment>
      <div class="login-container">
          <span class="login-text">Login</span>
      </div>
      </ React.Fragment>
    );
  }
};
