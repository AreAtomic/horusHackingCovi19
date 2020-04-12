import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

class FilterButton extends Component {
  render() {
    return (
      <Fragment>
        <SliderName>En ce moment</SliderName>
      </Fragment>
    );
  }
}

export default FilterButton;

const SliderName = styled.h2({
  textAlign: 'center',
  color: '#F5D84B',
  margin: '10px auto',
  padding: 0
});
