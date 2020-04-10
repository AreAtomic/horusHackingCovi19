import React, { useState, Fragment } from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <h2>OMIZ</h2>
      <form className='register' onSubmit={(e) => onSubmit(e)}>
        <Formgroup>
          <input
            type='text'
            name='email'
            placeholder='Email'
            value={email}
            required={true}
            onChange={(e) => onChange(e)}
          ></input>
        </Formgroup>
        <Formgroup>
          <input
            type='text'
            name='password'
            placeholder='Password'
            value={password}
            required={true}
            onChange={(e) => onChange(e)}
          ></input>
        </Formgroup>
        <Validation>
            <Link to='/Register' className="cancel">S'inscrire</Link>
          <input type='submit' value="Connexion" className="submit"></input>
        </Validation>
      </form>
    </Fragment>
  );
};

export default Login;

const Formgroup = styled.div({
  width: '90%',
  margin: 'auto',
});
const Validation = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  width: '90%',
  margin: 'auto',
  alignItems: 'center',
});