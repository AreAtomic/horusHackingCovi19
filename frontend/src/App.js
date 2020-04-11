import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Lives from './pages/Lives';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route extact path='/' component={Lives} />
          <Route path='/user' component={Lives} />
        </Switch>
      </Router>
    );
  }
}

export default App;
