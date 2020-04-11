import React, { Component, Fragment } from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider'
import '../App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar/>
        <Slider/>
      </Fragment>
    );
  }
}

export default App;
