import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import menu from '../../img/open-menu.svg';

class FilterButton extends Component {
  render() {
    return (
      <Fragment>
        <div className='filter'>
          <MenuButton src={menu}></MenuButton>
        </div>
      </Fragment>
    );
  }
}

export default FilterButton;

const MenuButton = styled.img({
  width: '40px',
});
