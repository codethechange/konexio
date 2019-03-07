import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { WelcomeButton } from '../components/WelcomeButton';
import { WelcomeText } from '../components/WelcomeText';
import welcome from '../images/welcome.png';
import '../stylesheets/Welcome.css';
export default class Welcome extends Component {
  state = {
  }

  render () {
      return (
        <React.Fragment>
            <WelcomeText/>
            <div>
                <img src={welcome} className="resize" />
            </div>
            <WelcomeButton />
        </React.Fragment>
      )
   }
}
