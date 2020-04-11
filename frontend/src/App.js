import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Lives from './pages/Lives';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route extact path='/' component={Login} />
          <section>
            <Switch>
              <Route path='/lives' component={Lives} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    );
  }
}

export default App;
