import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';
import logo from '../logo.png';
import '../App.css';

class Video extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://www.youtube.com/watch?v=g8KhFxLfZiM
        autoplay: 1,
      },
    };
    return (
      <Container>
        <div className='video'>
          <YouTube videoId='g8KhFxLfZiM' opts={opts} onReady={this._onReady} />
          <img
            src={logo}
            className='App-logo'
            alt='logo'
            style={{ margin: '0 auto' }}
          />
          <Desc>Tout vos lives au même endroit</Desc>
        </div>
      </Container>
    );
  }
}

export default Video;

const Container = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '80vh',
});

const Desc = styled.h3({
  color: '#F5D84B',
  textTransform: 'uppercase',
  fontSize: '28px',
  marginTop: 0
});
