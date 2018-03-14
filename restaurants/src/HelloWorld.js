import React, { Component } from 'react';
import PropTypes from "prop-types"

class HelloWorld extends Component {

  constructor(props) {
    super(props)
    this.state = { counter: 0 }
    this.increment = this.increment.bind(this)
  }

  increment() {
    this.setState(prev => {
      return {
        counter: this.state.counter + 1
      }
    })
  }

  render() {
    const listItems = this.props.names.map(n =>
      <li key={n}>autre noms : {n}</li>
    )

    return (
      <div>
        <h1>Hello  {this.props.name ? this.props.name : " world"} ! </h1>
        <h2>{this.props.city}</h2>
        <p>compteur : {this.state.counter}</p>
        {listItems}
        <button onClick={this.increment}>OK</button>
      </div>
    )
  }
}

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
  names: PropTypes.array
}

export default HelloWorld;
