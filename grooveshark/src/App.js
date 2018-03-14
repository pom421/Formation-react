import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router"

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <p><Link to="/showCategories">See categories</Link></p>
          <p><Link to="/showArtists">See artists</Link></p>
          <p><Link to="/showAlbums">See albums</Link></p>
          <p><Link to="/search">Search</Link></p>
          <p><Link to="/addAlbum">Add album</Link></p>
          <p><Link to="/deleteAlbum">Delete album</Link></p>
        </ul>
      </div>
    );
  }
}

export default App;
