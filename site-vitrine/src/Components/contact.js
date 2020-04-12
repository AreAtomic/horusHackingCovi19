import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../logo.png';
import facebook from '../facebook.svg';
import instagram from '../instagram.svg';
import twitter from '../twitter.svg';
import email from '../email.svg';
import '../App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Resau>
          <img src={facebook} alt='Facebook' className='reseau' />
          <img src={instagram} alt='Facebook' className='reseau' />
          <img src={email} alt='Facebook' className='reseau' />
          <img src={twitter} alt='Facebook' className='reseau' />
        </Resau>
      </Fragment>
    );
  }
}

export default App;

const Resau = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridAutoRows: 'auto',
  marginTop: '15%',
});
