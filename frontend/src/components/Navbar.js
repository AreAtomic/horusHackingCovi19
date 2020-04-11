import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import SearchBar from './nav_bar/SearchBar';
import FilterButton from './nav_bar/filterButton';
import '../App.css';

class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <Nav>
          <FilterButton />
          <SearchBar />
        </Nav>
      </Fragment>
    );
  }
}

export default NavBar;

const Nav = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr 5fr',
  gridTemplateRows: '80px',
  justifyContent: 'center'
});
