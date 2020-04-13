import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../logo.png';
import '../../App.css';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Paragraphe>
                    <P>En pleine crise pandémique, le confinement représente notre plus grande force pour endiguer la maladie en limitant tout contact entre les personnes. Mais comment limiter le contact humain quand il est nécessaire de conserver un lien social avec l'extérieur?</P>
                </Paragraphe>
                <div className="colonne">
                    <Card><div className='card-title'>Regrouper</div><P>Mettre en commun sur une même plateforme les différents événements à disposition des utilisateurs via un lien de redirection vers l’évènement
                    (Insta, Zoom, Youtube).</P></Card>
                    <Card><div className='card-title'>Simplifier</div><P>Simplifier l’accès aux différents types de services en live qui existent actuellement</P></Card>
                    <Card><div className='card-title'>Plannifier</div><P>Trier cet afflux de services grâce à une barre de recherche avec possibilité de chercher par catégorie, par centre d’intérêts ou par personnalité.</P></Card>                 
                </div>
            </Fragment>
        );
    }
}

export default App;

const Paragraphe = styled.div({
    width: "75%",
    textAlign: 'center',
    margin: 'auto',
    padding:"50px",

})
const Card = styled.div({
    padding:'25px 10px',
    border: 'solid',
    borderRadius: '15px',    
    textAlign: 'center',
    margin:'25px',

})
const P = styled.div({
    fontSize: '25px',
})
