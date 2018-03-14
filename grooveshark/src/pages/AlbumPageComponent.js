import React, { Component } from 'react';
import { Link } from "react-router"
import { connect } from "react-redux"
import { SHOW_TITRES } from '../actions/actions';
import config from "../config"

class AlbumPageComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.idAlbum = this.props.params.id
        if (this.idAlbum) {
            this.getAlbumDetail(this.idAlbum)
        }
    }

    getAlbumDetail() {
        fetch(`${config.url}/titres?idAlbum=${this.idAlbum}`).then(response => {
            return response.json()
        }).then(json => {
            this.props.dispatch({
                type: SHOW_TITRES,
                payload: json
            })
        }).catch(err => {
            console.error("Problème dans fetch pour récupérer album " + this.idAlbum, err)
        })
    }

    render() {

        const lis = this.props.titres.map(titre =>
            <li key={`titreid_${titre.idAlbum}_${titre.id}`}>{titre.nom}</li>
        )

        return (
            <div>
                <p><Link to="/" >Retour</Link></p>
                <h1>Liste des titres</h1>
                <ul>
                    {lis}
                </ul>
            </div>
        )
    }
}

function mapStateToProp(applicationState) {
    return {
        titres: applicationState.titresState
    }
}

export default connect(mapStateToProp)(AlbumPageComponent)