import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from "./components/Splash";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route extact path="/" component={Splash} />
        </Switch>
      </Router>
    );
  }
}

export default App;
