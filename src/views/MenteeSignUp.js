import React, { Component } from 'react';
import { MenteeSignUpFirstPage } from '../components/MenteeSignUpFirstPage';
export default class MenteeSignUp extends Component {
  state = {
  }

  render () {
      return (
        <React.Fragment>
        <div>
           <h1> This is the mentee signup page. </h1>
        </div>
        <MenteeSignUpFirstPage />
        </React.Fragment>
      )
   }
}
