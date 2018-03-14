import React, { Component } from 'react';

class HelloWorld extends Component {
  render() {

    //const name = this.props.name ? this.props.name : " world"

    return (
      <div>
        <h1>Hello  {this.props.name ? this.props.name : " world"} ! </h1>
        <h2>{this.props.city}</h2>
      </div>
    )
  }
}

export default HelloWorld;
