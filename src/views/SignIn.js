import React, { Component } from 'react';
import { SignInButton } from '../components/SignInButton';
import { LoginText } from '../components/LoginText';
import { DontHaveAcctButton } from '../components/DontHaveAcctButton';
import { ForgotPasswordButton } from '../components/ForgotPasswordButton';

export default class SignIn extends Component {
  state = {
  }

  render () {
      return (
        <div>
        <SignInButton />
        <LoginText />
        <DontHaveAcctButton />
        <ForgotPasswordButton />
        </div>
      )
   }
}
