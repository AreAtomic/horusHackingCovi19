import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from "./components/Splash";
import Register from "./components/Register";
import Lives from "./pages/Lives";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route extact path="/" component={Splash} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
