import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import '../App.css';

class Nav extends Component {
  render() {
    return (
      <Header className='App-header'>
        <Link to='/'><img src={logo} className='App-logo' alt='logo'/></Link>
        <Links>
        <a href ='https://forms.gle/Z26HQF1R9k3PqHUf9'className='fontHeader'style={{margin: '0 auto'}}>Formulaire</a>
          <Link to='/Info' className='fontHeader'style={{margin: '0 auto'}}>Plus d'infos</Link>
          <Link to='/contact' className='fontHeader'style={{margin: '0 auto'}}>Nous contacter</Link>
        </Links>
      </Header>
    );
  }
}

export default Nav;

const Header = styled.div({
  display: 'grid',
  gridTemplateColumns: 'auto auto',
});

const Links = styled.div({
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
});
