import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/MenteeSignUp.css';
import Form from 'react-bootstrap/Form';

export class MenteeSignUpFirstPage extends Component {
    render () {
        return (
            <React.Fragment>
                <div>
                    <first-name-field />
                </div>
                <Form>
                    <Form.Group controlId="firstName">
                        <Form.Control type="firstName" size="lg" />
                    </Form.Group>
                </Form>
            </React.Fragment>
        );
    }
};
