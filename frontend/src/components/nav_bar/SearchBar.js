import React, { Component, Fragment } from "react";
import styled from "styled-components";

class SearchBar extends Component {
  render() {
    return (
      <Fragment>
        <input
          className="search_input"
          type="text"
          placeholder="Recherche"
        ></input>
      </Fragment>
    );
  }
}

export default SearchBar;
