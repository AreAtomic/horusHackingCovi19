import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import '../App.css';

class Nav extends Component {
  render() {
    return (
      <Header className='App-header'>
        <img src={logo} className='App-logo' alt='logo'/>
        <Links>
          <Link to='/info' style={{margin: '0 auto'}}>Plus d'infos</Link>
          <Link to='/contact' style={{margin: '0 auto'}}>Nous contacter</Link>
        </Links>
      </Header>
    );
  }
}

export default Nav;

const Header = styled.div({
  display: 'grid',
  gridTemplateColumns: '10fr 2fr',
});

const Links = styled.div({
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
});
