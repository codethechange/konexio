import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
//import '../stylesheets/UsernamePassword.css';

export class UsernamePassword extends Component {
  render () {
    return (
      <div class = "container" padding = "100px">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" size = "lg"/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" size = "lg"/>
          </Form.Group>
          <Form.Group controlId="formBasicChecbox">
          <Form.Check type="checkbox" label="Remember me"/>
        </Form.Group>
      </Form>
      </div>
    );
  }
};
