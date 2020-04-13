import React, { Component, Fragment } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Title from '../Components/form/title';
import Form from '../Components/form/form'
import Nav from '../Components/Nav';
import SignUp from '../Components/SignButton'
import '../App.css';

class Signup extends Component {
    render() {
        return (
            <Fragment>
                <Nav/>
                <Title/>
                <Form/>
                <Link to='/' className="retour">Retour</Link>
            </Fragment>
        );
    }
}

export default Signup;