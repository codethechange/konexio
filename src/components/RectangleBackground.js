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
      <div align="center" class="rectangle-background">
        <table class="vMiddle">
          <tr>
            <td>
              <LoginText />
            </td>
          </tr>
          <tr>
            <td>
              <UsernamePassword />
            </td>
          </tr>
          <tr>
            <td>
              <SignInButton />
            </td>
          </tr>
          <tr>
            <td>
              <table>
                <tr>
                  <td>
                    <ForgotPasswordButton />
                  </td>
                  <td>
                    <DontHaveAcctButton />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
