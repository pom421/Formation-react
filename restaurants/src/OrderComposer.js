import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addOrderAction } from './orderActions';

class OrderComposer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            newOrder: ""
        }
        this.updateNewOrder = this.updateNewOrder.bind(this)
        this.addNewOrder = this.addNewOrder.bind(this)
    }

    updateNewOrder(e) {
            let newOrder = e.target.value
            console.log("this", this)
            this.setState({
                newOrder: newOrder
            })
    }

    addNewOrder() {
        if (this.state.newOrder !== "") {
            this.props.dispatch(
                addOrderAction(this.state.newOrder)
            )
        }
    }

    render() {
        return (
            <div>
                <input type="text" 
                    value={this.state.newOrder}
                    onChange={this.updateNewOrder} />
                <button onClick={ this.addNewOrder }>Add Order</button>
            </div>
        )
    }
}

export default connect()(OrderComposer)