import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { value, onIncrement, onDecrement } = this.props
    return(
      <div>
        <h1>demo counter</h1>
        <h2>counter:{value}</h2>
        <button onClick={onIncrement}>add one</button>
        <button onClick={onDecrement}>decrease one</button>
      </div>
    )
  }
}
