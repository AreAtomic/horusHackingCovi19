import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import SearchBar from './nav_bar/SearchBar';
import FilterButton from './nav_bar/filterButton';
import Menu from './Menu'
import '../App.css';

class NavBar extends Component {
  render() {
    console.log(Menu.props)
    return (
      <Fragment>
        <Nav>
          <FilterButton />
          <SearchBar />
        </Nav>
        <Menu/>
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
