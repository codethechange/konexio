import React, { Component } from "react";
import "./App.css";
import Profile from "./views/Profile";
import SignIn from "./views/SignIn";
import MenteeSignUp from "./views/MenteeSignUp";
import MentorSignUp from "./views/MentorSignUp";
import Welcome from "./views/Welcome";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact={true}
            path="/"
            render={() => (
              <div className="App">
                <Welcome />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/MentorSignUp"
            render={() => (
              <div className="App">
                <MentorSignUp />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/MenteeSignUp"
            render={() => (
              <div className="App">
                <MenteeSignUp />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/SignIn"
            render={() => (
              //<div className="App">
                <SignIn />
              //</div>
            )}
          />
          <Route
            exact={true}
            path="/Profile"
            render={() => (
              <div className="App">
                <Profile />
              </div>
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
