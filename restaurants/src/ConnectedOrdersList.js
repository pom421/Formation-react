import { connect } from "react-redux"
import OrdersList from "./OrdersList"

function mapStateToProp(applicationState) {
    return {
        orders: applicationState.ordersState
    }
}

const ConnectedOrdersList = connect(
    mapStateToProp
)(OrdersList)

export default ConnectedOrdersList