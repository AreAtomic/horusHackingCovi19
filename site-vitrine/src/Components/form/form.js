import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import '../../App.css';

class form extends Component {
  render() {
    return (
      <Fragment>
        <Form action='/send'>
          <input type='text' placeholder='Nom' className='signupRows'></input>
          <input
            type='text'
            placeholder='Prenom'
            className='signupRows'
            required='true'
          ></input>
          <input
            type='text'
            placeholder='Date de naissance'
            className='signupRows'
            required='true'
          ></input>
          <input
            type='email'
            placeholder='Email'
            className='signupRows'
            required='true'
          ></input>
          <input type='submit' value='Inscrivez-vous' className='button' />
        </Form>
      </Fragment>
    );
  }
}

export default form;

const Form = styled.form({
  display: 'grid',
  width: '100%',
  marginBottom: '50px',
});
