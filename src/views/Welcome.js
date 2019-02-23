import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { WelcomeButton } from '../components/WelcomeButton';
export default class Welcome extends Component { 
  state = { 
  }

  render () {                                   
      return (
        <React.Fragment>
            <div>
                <h1> This is the welcome page. </h1>
            </div>
            <WelcomeButton />
        </React.Fragment>
      )
   }
}