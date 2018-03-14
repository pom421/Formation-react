import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ConnectedOrdersList from './ConnectedOrdersList';
import OrderComposer from './OrderComposer';

class App extends Component {
  render() {
    return (
      <div>
        <OrderComposer />
        <ConnectedOrdersList />
      </div>
    );
  }
}

export default App;
