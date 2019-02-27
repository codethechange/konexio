import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/DontHaveAcctButton.css';

export class DontHaveAcctButton extends Component {
  render () {
    return (
      <React.Fragment>
      <div class="noacct-container">
        <Link to="/MenteeSignUp">
        <button class="noacct-button">
          <span class="noacct-button-text">Don't have an account?</span>
        </button>
        </Link>
      </div>
      </ React.Fragment>
    );
  }
};
