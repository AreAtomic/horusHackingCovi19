import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from '../logo.png';
import Nav from '../Components/Nav';
import Contact from '../Components/contact';
import '../App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav></Nav>
        <Contact/>
      </Fragment>
    );
  }
}

export default App;