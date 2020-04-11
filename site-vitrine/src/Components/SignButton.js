import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import YouTube from 'react-youtube';
import logo from '../logo.png';
import '../App.css';

class SignButton extends Component {
  render() {
    return (
      <Fragment>
          <Link to='/signup' className="button">Inscrivez-vous</Link>
      </Fragment>
    );
  }
}

export default SignButton;