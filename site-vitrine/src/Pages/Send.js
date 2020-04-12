import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Thanks from '../Components/thanks/container';
import Nav from '../Components/Nav';
import '../App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Thanks/>
      </Fragment>
    );
  }
}

export default App;
