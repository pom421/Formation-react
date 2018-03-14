import React from "react"
import PropTypes from "prop-types"

export default function OrdersList(props) {
    
    return (
        <ul>
            { props.orders.map(order => <li key={ order.orderAt }>{order.meal}</li>)}
        </ul>
    )
}

OrdersList.propTypes = {
    orders: PropTypes.arrayOf(PropTypes.shape({
        orderAt: PropTypes.number,
        meal: PropTypes.string
    })).isRequired
}