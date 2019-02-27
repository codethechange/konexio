import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/ForgotPasswordButton.css';

export class ForgotPasswordButton extends Component {
  render () {
    return (
      <React.Fragment>
      <div class="forgotpassword-container">
        <Link to="/MenteeSignUp">
        <button class="forgotpassword-button">
          <span class="forgotpassword-button-text">Forgot Password?</span>
        </button>
        </Link>
      </div>
      </ React.Fragment>
    );
  }
};
