import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from '../logo.png';
import Texte from '../Components/thanks/texte';
import Nav from '../Components/Nav';
import Video from '../Components/Video';
import Contact from '../Components/contact';
import '../App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav></Nav>
        <div className='video'>
        <Video videoId='npXUwPzWHP4'></Video></div>
        <Texte></Texte>
      </Fragment>
    );
  }
}

export default App;