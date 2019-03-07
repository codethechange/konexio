import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/WelcomeButton.css';

export class WelcomeButton extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="mentor-container">
                    <Link to="/MentorSignUp">
                        <button className="mentor-button">
                            <span className="mentor-button-text">I am a mentor</span>
                        </button>
                    </Link>
                </div>
                <div className="mentee-container">
                    <Link to="/MenteeSignUp">
                        <button className="mentee-button">
                            <span className="mentee-button-text">I am looking for a mentor</span>
                        </button>
                    </Link>
                </div>
            </ React.Fragment>
        );
    }
};
