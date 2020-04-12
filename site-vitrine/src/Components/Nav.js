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
        <a href ='https://forms.gle/Z26HQF1R9k3PqHUf9'style={{margin: '0 auto'}}>Formulaire</a>
          <a href='https://hackcovid19.bemyapp.com/#/projects/5e90c489f1e9c6001bd9bdfc' style={{margin: '0 auto'}}>Plus d'infos</a>
          <Link to='/contact' style={{margin: '0 auto'}}>Nous contacter</Link>
        </Links>
      </Header>
    );
  }
}

export default Nav;

const Header = styled.div({
  display: 'grid',
  gridTemplateColumns: '10fr 3fr',
});

const Links = styled.div({
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
});
