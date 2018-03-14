import React, { Component } from 'react';
import { Link } from "react-router"

class AddAlbumPageComponent extends Component {

    render() {
        return (
            <div>
                <p><Link to="/" >Retour</Link></p>
                <h1>Ajout d'album</h1>
            </div>
        )
    }
}

export default AddAlbumPageComponent