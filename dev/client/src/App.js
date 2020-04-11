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
          <Login />
          <Route exact path='/' component={Register}/>
        </div>
      </Router>
    );
  }
}

export default App;
