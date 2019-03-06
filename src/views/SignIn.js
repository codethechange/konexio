import React, { Component } from "react";
import { RectangleBackground } from "../components/RectangleBackground";
import { Logo } from "../components/Logo";

export default class SignIn extends Component {
  state = {};

  render() {
    return (
      <div>
        <RectangleBackground />
        <Logo />
      </div>
    );
  }
}
