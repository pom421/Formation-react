import React, { Component } from 'react';
import { Link } from "react-router"

class ArtistesPageComponent extends Component {

    render() {
        return (
            <div>
                <p><Link to="/" >Retour</Link></p>
                <h1>Liste des artistes</h1>
            </div>
        )
    }
}

export default ArtistesPageComponent