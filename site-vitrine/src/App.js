import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.png';
import Nav from './Components/Nav';
import Video from './Components/Video';
import SignButton from './Components/SignButton'
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Route exact path='/' component={Nav}/>
          <Video></Video>
          <SignButton/>
        </Router>
      </Fragment>
    );
  }
}

export default App;
