import React, { Component } from "react";
import { SignInButton } from "../components/SignInButton";
import { LoginText } from "../components/LoginText";
import { DontHaveAcctButton } from "../components/DontHaveAcctButton";
import { ForgotPasswordButton } from "../components/ForgotPasswordButton";
import { UsernamePassword } from "../components/UsernamePassword";
import "../stylesheets/RectangleBackground.css";

export class RectangleBackground extends Component {
  render() {
    return (
        <div class="rectangle-background">
          <SignInButton />
          <LoginText />
          <DontHaveAcctButton />
          <ForgotPasswordButton />
          <UsernamePassword />
        </div>
    );
  }
}
