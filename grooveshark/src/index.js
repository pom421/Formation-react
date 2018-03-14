import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import reducers from "./reducers/reducers"
import { Router, Route, browserHistory } from "react-router"
import { syncHistoryWithStore } from "react-router-redux"
import registerServiceWorker from './registerServiceWorker';
import CategoriesPageComponent from './pages/CategoriesPageComponent';
import ArtistesPageComponent from './pages/ArtistesPageComponent';
import AlbumsPageComponent from './pages/AlbumsPageComponent';
import AlbumPageComponent from './pages/AlbumPageComponent';
import SearchPageComponent from './pages/SearchPageComponent';
import AddAlbumPageComponent from './pages/AddAlbumPageComponent';
import DeleteAlbumPageComponent from './pages/DeleteAlbumPageComponent';
import logger from "redux-logger"

let initialAppState = {
    categoriesState: [],
    albumsState : [],
    titresState: []
}

let store = createStore(reducers, initialAppState, applyMiddleware(logger))
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} />
            <Route path="/showCategories" component={CategoriesPageComponent} />
            <Route path="/showArtists" component={ArtistesPageComponent} />
            <Route path="/showAlbums" component={AlbumsPageComponent} />
            <Route path="/album/:id" component={AlbumPageComponent} />
            <Route path="/search" component={SearchPageComponent} />
            <Route path="/addAlbum" component={AddAlbumPageComponent} />
            <Route path="/deleteAlbum" component={DeleteAlbumPageComponent} />
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
