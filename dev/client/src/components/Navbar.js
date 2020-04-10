import React, { Component } from 'react';

class Navbar extends Component {
    render(){
        return(
            <div class="navbar">
                <h1><a href="index.html">Hacking covid-19</a></h1>
                <ul>
                    <li>Connexion</li>
                    <li>Signup</li>
                </ul>
            </div>
        )
    }
}

export default Navbar;