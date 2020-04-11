import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Player } from 'video-react';
import logo from '../logo.png';
import '../App.css';

class Video extends Component {
  render() {
    return (
      <Container className='App-header'>
        <img src={logo} className='App-logo' alt='logo'/>
      </Container>
    );
  }
}

export default Video;

const Container = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr',
});

const Links = styled.div({
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
});