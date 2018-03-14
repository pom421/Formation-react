import React from "react"
import ListGeneric from "./ListGeneric"

export default class ListUsers extends React.Component {

    constructor(props) {
        super(props)
        this.state = { data: null }
        this.getAjaxData()
    }

    getAjaxData() {
        fetch("http://jsonplaceholder.typicode.com/users").then(response => {
            return response.json()
        }).then(json => {
            const resJson = json.map(elt => { return { id: elt.id, data: elt.username } })
            this.setState({ data: resJson })
        }).catch(err => {
            console.error("Erreur lors du fetch", err)
        })
    }

    render() {

        return (
            <ListGeneric data={this.state.data} />
        )
    }

}