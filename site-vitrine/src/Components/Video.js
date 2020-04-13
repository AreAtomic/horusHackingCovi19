import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';
import logo from '../logo.png';
import '../App.css';

class Video extends Component {
  constructor(props){
    super()
  }
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
        <div>
          <YouTube videoId={this.props.videoId} opts={opts} onReady={this._onReady} />
        </div>
      </Container>
    );
  }
}

export default Video;

const Container = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr',
  marginTop: '12px'
});


