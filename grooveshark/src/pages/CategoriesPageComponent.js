import React, { Component } from 'react';
import { Link } from "react-router"
import { connect } from "react-redux"
import { SHOW_CATEGORIES } from '../actions/actions';
import config from "../config"

class CategoriesPageComponent extends Component {

    componentDidMount() {
        this.getCategories()
    }

    getCategories() {
        fetch(`${config.url}/categories`).then(response => {
            return response.json()
        }).then(json => {
            this.props.dispatch({
                type: SHOW_CATEGORIES,
                payload: json
            })
        }).catch(err => {
            console.error("Problème dans fetch pour récupérer les catégories", err)
        })
    }

    render() {

        const lis = this.props.categories.map(categorie =>
            <li key={`categorie_${categorie.id}`}>{categorie.nom}</li>
        )

        return (
            <div>
                <p><Link to="/" >Retour</Link></p>
                <h1>Liste des catégories</h1>
                <ul>
                    {lis}
                </ul>
            </div>
        )
    }
}

function mapStateToProp(applicationState) {
    return {
        categories: applicationState.categoriesState
    }
}

export default connect(mapStateToProp)(CategoriesPageComponent)
