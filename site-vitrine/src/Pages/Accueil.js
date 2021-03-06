import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from '../logo.png';
import Nav from '../Components/Nav';
import Video from '../Components/Video';
import SignButton from '../Components/SignButton'
import styled from 'styled-components';
import '../App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav></Nav>
        <div className='video'><Video videoId='g8KhFxLfZiM'></Video></div>
        <div className='live'>Tout vos lives au même endroit</div>
        <SignButton />
      </Fragment>
    );
  }
}

export default App;
