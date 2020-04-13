import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import logo from '../../logo.png';
import '../../App.css';

class form extends Component {
    render() {
        return (
            <Fragment>
                <Top>
                    <img src={logo} alt="OMIZ Logo" style={{ width: '222px', height: '110px', margin:'auto'}} />
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

