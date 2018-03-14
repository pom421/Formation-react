import React from "react"

export default class ListGeneric extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.data && this.props.data instanceof Array) {
            const mkLis = this.props.data.map(elt => <li key={elt.id}>{elt.data}</li>)
            return (
                <ul>
                    {mkLis}
                </ul>
            )
        }
        return ""

    }
}