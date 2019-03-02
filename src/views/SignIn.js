import React, { Component } from "react";
import { SignInButton } from "../components/SignInButton";
import { LoginText } from "../components/LoginText";
import { DontHaveAcctButton } from "../components/DontHaveAcctButton";
import { ForgotPasswordButton } from "../components/ForgotPasswordButton";
import UsernameField from "../components/UsernameForm";
import { RectangleBackground } from "../components/RectangleBackground";

export default class SignIn extends Component {
  state = {};

  render() {
    return (
      <div>
        <RectangleBackground />
        <UsernameField />
        <SignInButton />
        <LoginText />
        <DontHaveAcctButton />
        <ForgotPasswordButton />
      </div>
    );
  }
}
