import { combineReducers } from "redux"
import { ADD_ORDER } from "./orderActions"

function ordersReducer(state = [], action) {

    switch (action.type) {
        case ADD_ORDER:
            // concat renvoie un nouveau tableau
            return state.concat([ action.payload.order ])
        default: 
            return state
    }
}


const reducers = combineReducers({
    ordersState: ordersReducer
})

export default reducers