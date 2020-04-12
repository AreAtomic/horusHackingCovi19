import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Slider from './slider/slider';
import Title from './slider/title';

class Slide extends Component {
  render() {
    return (
      <Fragment>
        <Title />
        <Slider/>
      </Fragment>
    );
  }
}

export default Slide;

const SliderName = styled.h2({
  textAlign: 'center',
  color: '#F5D84B',
});
