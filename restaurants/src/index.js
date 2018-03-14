import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducers from "./reducers"


let initialOrders = [
    { orderAt: 1520866610453, meal: "Margherita" },
    { orderAt: 1520866631571, meal: "Gnocchi" },
    { orderAt: 1520866637475, meal: "Bruschetta" }
    
]

let initialAppState = {
    ordersState: initialOrders
}

let store = createStore(reducers, initialAppState)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
