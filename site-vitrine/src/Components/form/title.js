import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import logo from '../../logo.png';
import '../../App.css';

class form extends Component {
    render() {
        return (
            <Fragment>
                <Top>
                    <img src={logo} alt="OMIZ Logo" style={{ width: '222px', height: '110px', margin: '50px auto 0'}} />
                    <Title>Tous vos lives au même endroit</Title>
                </Top>
            </Fragment>
        );
    }
}

export default form;

const Top = styled.form({
    display: "grid",
    width: '100%'
});

const Title = styled.h3({
    color: '#F5D84B',
    textTransform: 'uppercase',
    fontSize: '28px',
    margin: '10px auto 50px',
});