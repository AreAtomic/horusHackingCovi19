import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../logo.png';
import facebook from '../facebook.svg';
import linkedin from '../LinkedIN.svg';
import instagram from '../instagram.svg';
import twitter from '../twitter.svg';
import email from '../email.svg';
import '../App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Resau>
          <a href ='https://www.facebook.com/omiz.tousenlive/' className='reseau'><img src={facebook} alt='Facebook' className='reseau' /></a>
          <a href='https://www.linkedin.com/company/65351414/admin/' className='reseau'><img src={linkedin} alt='LikedIn' className='reseau' /></a>
          <a href='https://www.instagram.com/omiz.toutenlive/' className='reseau'><img src={instagram} alt='Instagram' className='reseau' /></a>
          <a href='mailto:contact.omiz.startup@gmail.com' className='reseau'><img src={email} alt='Email' className='reseau' /></a>
          <a href = 'https://twitter.com/en_omiz ' className='reseau'><img src={twitter} alt='Twitter' className='reseau' /></a>
        </Resau>
      </Fragment>
    );
  }
}

export default App;

const Resau = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridAutoRows: 'auto',
  marginTop: '15%',
});
