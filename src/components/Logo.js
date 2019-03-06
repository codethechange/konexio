import React, { Component } from "react";
import "../stylesheets/Logo.css";
import logo from "../components/konexio_logo.png";

export class Logo extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="logo-container">
          <img src={logo} width="320px" height="130px" />
        </div>
      </React.Fragment>
    );
  }
}
