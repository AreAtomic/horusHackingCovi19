import React, { useState, Fragment } from 'react';
import styled from 'styled-components';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Passwords do not match');
    } else {
      console.log(formData);
    }
  };
  return (
    <Fragment>
      <h2>Bienvenue !</h2>
      <form className='register' onSubmit={(e) => onSubmit(e)}>
        <Formgroup>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={name}
            required={true}
            onChange={(e) => onChange(e)}
          ></input>
        </Formgroup>
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
        <Formgroup>
          <input
            type='text'
            name='password2'
            placeholder='Confirm password'
            value={password2}
            required={true}
            onChange={(e) => onChange(e)}
          ></input>
        </Formgroup>
        <Validation>
            <a href='/retour' className="cancel">Retour</a>
          <input type='submit' value="S'inscrire" className="submit"></input>
        </Validation>
      </form>
      <Slider>
          <ul className="sliderCount">
              <li key={1}>1</li>
              <li key={2} style={{listStyle: '-'}}>2</li>
              <li key={3}>3</li>
          </ul>
      </Slider>
    </Fragment>
  );
};

export default Register;

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
const Slider = styled.div({
    display: "grid",
    width:"50%",
    margin: '50px auto 0',
})