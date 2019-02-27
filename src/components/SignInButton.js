import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/SignInButton.css';

export class SignInButton extends Component {
  render () {
    return (
      <React.Fragment>
      <div class="signin-container">
        <Link to="/Profile">
        <button class="signin-button">
          <span class="signin-button-text">Sign In</span>
        </button>
        </Link>
      </div>
      </ React.Fragment>
    );
  }
};
