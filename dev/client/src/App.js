import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Route exact path='/' component={Landing}/>
        </div>
      </Router>
    );
  }
}

export default App;
