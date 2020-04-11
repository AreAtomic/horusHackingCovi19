import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.png';
import Nav from './Components/Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path='/' component={Nav}></Route>
      </Fragment>
    );
  }
}

export default App;