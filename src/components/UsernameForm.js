import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/UsernameForm.css";

class UsernameField extends Component {
  state = {};
  render() {
    return (
      <form class="UsernameForm-Container">
        <label>
          <input type="text" name="name" />
        </label>
      </form>
    );
  }
}

export default UsernameField;
