import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.png';
import Accueil from './Pages/Accueil';
import Signup from './Pages/Signup';
import Thanks from './Pages/Send';
import Contact from './Pages/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <section>
            <Switch>
              <Route exact path='/' component={Accueil} />
              <Route path='/signup' component={Signup} />
              <Route path='/send' component={Thanks} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </section>
        </Router>
      </Fragment>
    );
  }
}

export default App;
