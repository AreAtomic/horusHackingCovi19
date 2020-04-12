import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import '../../App.css';
import * as emailjs from 'emailjs-com';
import {
  Button,
  FormFeedback,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('gmail', 'omiz', e.target, 'user_ZxyoPZfkQ5PWeOtPX8BVy')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
}

class form extends Component {
  render() {
    return (
      <Fragment>
        <Form onSubmit={sendEmail} className="formulaireInscription">
          <input
            type='text'
            name='name'
            // value={this.state.name}
            // onChange={this.handleChange.bind(this, 'name')}
            placeholder='Nom'
            className='signupRows'
            required='true'
          ></input>
          <input
            type='text'
            name='prenom'
            placeholder='Prenom'
            className='signupRows'
            // value={this.state.prenom}
            // onChange={this.handleChange.bind(this, 'prenom')}
            required='true'
          ></input>
          <input
            type='text'
            name='birthday'
            placeholder='Date de naissance'
            className='signupRows'
            required='true'
          ></input>
          <input
            type='email'
            name='email'
            placeholder='Email'
            className='signupRows'
            required='true'
            // onChange={this.handleChange.bind(this, 'email')}
            // value={this.state.email}
          ></input>
          <Button type='submit' value='Inscrivez-vous' className='button' />
        </Form>
      </Fragment>
    );
  }
}

export default form;

/*const Form = styled.form({
  display: 'grid',
  width: '100%',
  marginBottom: '50px',
});*/
