import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import { SHOW_ALBUMS, SHOW_TITRES, SHOW_CATEGORIES } from "../actions/actions"

function albumsReducer(state = [], action) {
    let newState
    switch (action.type) {
        case SHOW_ALBUMS:
            newState = action.payload
            return newState
        default:
            return state

    }
}
function titresReducer(state = [], action) {
    let newState
    switch (action.type) {
        case SHOW_TITRES:
            newState = action.payload
            return newState
        default:
            return state

    }
}
function categoriesReducer(state = [], action) {
    let newState
    switch (action.type) {
        case SHOW_CATEGORIES:
            newState = action.payload
            return newState
        default:
            return state

    }
}

const reducers = combineReducers({
    routing: routerReducer,
    albumsState: albumsReducer,
    titresState: titresReducer,
    categoriesState: categoriesReducer
})

export default reducers