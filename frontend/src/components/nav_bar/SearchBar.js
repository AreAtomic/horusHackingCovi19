import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

class SearchBar extends Component {
  render() {
    return (
      <Fragment>
        <input type='text' placeholder='Recherche' className='recherche'></input>
      </Fragment>
    );
  }
}

export default SearchBar;
