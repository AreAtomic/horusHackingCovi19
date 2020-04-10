import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route exact path='/' component={Login} />
          <section>
            <Switch>
              <Route exact path='/register' component={Register} />
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
