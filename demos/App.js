import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count:1
    }
    this.addCount = this.addCount.bind(this)
    this.decreaseCount = this.decreaseCount.bind(this)
  }
  addCount() {
    this.setState({
      count:this.state.count + 1
    })
  }
  decreaseCount() {
    this.setState({
      count:this.state.count - 1
    })
  }
  render() {
    return(
      <div>
        <h1>demo counter</h1>
        <h2>counter:{this.state.count}</h2>
        <button onClick={this.addCount}>add one</button>
        <button onClick={this.decreaseCount}>decrease one</button>
      </div>
    )
  }
}
