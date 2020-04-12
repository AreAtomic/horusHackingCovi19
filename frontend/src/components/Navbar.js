import React, { Component } from "react";
import SearchBar from "./nav_bar/SearchBar";
import FilterButton from "./nav_bar/filterButton";
import Menu from "./Menu";
import Logo from "./Logo";
import "../App.css";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <Logo />
        <div className="navbar-container">
          <div className="filter-container">
            <FilterButton />
          </div>
          <div className="search-container">
            <SearchBar />
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
