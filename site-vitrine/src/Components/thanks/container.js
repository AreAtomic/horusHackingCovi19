import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import logo from '../../logo.png';
import '../../App.css';

class Thanks extends Component {
  render() {
    return (
      <Container>
          <h1>Merci !</h1>
          <h6>Stay tune ! L'app arrive bientôt ...</h6>
      </Container>
    );
  }
}

export default Thanks;

const Container = styled.div({
    display: 'grid',
    textAlign: 'center'
})