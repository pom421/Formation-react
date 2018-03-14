import React, { Component } from 'react';
import { Link } from "react-router"

class DeleteAlbumPageComponent extends Component {

    render() {
        return (
            <div>
                <p><Link to="/" >Retour</Link></p>
                <h1>Suppression d'un album</h1>
            </div>
        )
    }
}

export default DeleteAlbumPageComponent