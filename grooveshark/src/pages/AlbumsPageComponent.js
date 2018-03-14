import React, { Component } from 'react';
import { Link } from "react-router"
import { connect } from "react-redux"
import { SHOW_ALBUMS } from '../actions/actions';
import config from "../config"

class AlbumsPageComponent extends Component {

    componentDidMount() {
        this.getAllAlbums()
    }

    getAllAlbums() {

        fetch(`${config.url}/albums`).then(response => {
            return response.json()
        }).then(json => {
            this.props.dispatch({
                type: SHOW_ALBUMS,
                payload: json

            })
        }).catch(err => {
            console.error("Erreur lors du fetch", err)
        })

    }

    render() {

        const lis = this.props.albums.map(album =>
            <li key={`titreid_${album.id}_${album.id}`}><Link to={`/album/${album.id}`}>{album.titre}</Link></li>
        )

        return (
            <div>
                <p><Link to="/" >Retour</Link></p>
                <h1>Liste des albums</h1>
                <ul>
                    {lis}
                </ul>
            </div>
        )
    }
}

function mapStateToProp(applicationState) {
    return {
        albums: applicationState.albumsState
    }
}

export default connect(mapStateToProp)(AlbumsPageComponent)