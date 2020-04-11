import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import '../../App.css';

class form extends Component {
  render() {
    return (
      <Fragment>
        <Form action='/'>
          <input type='text' placeholder='Nom' className="signupRows"></input>
          <input type='text' placeholder='Prenom' className="signupRows"></input>
          <input type='text' placeholder='Date de naissance' className="signupRows"></input>
          <input type='email' placeholder='Email' className="signupRows"></input>
        </Form>
      </Fragment>
    );
  }
}

export default form;

const Form = styled.form({
  display: "grid",
  width: '100%'
});
