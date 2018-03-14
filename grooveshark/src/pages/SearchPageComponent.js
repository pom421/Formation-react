import React, { Component } from 'react';
import { Link } from "react-router"

class SearchPageComponent extends Component {

    render() {
        return (
            <div>
                <p><Link to="/" >Retour</Link></p>
                <h1>Recherche d'album</h1>
            </div>
        )
    }
}

export default SearchPageComponent