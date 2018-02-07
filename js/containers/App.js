import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import TodoLists from '../component'

class App extends Component {
	render() {
    return (
      <div className="todo">
        <h1 className="todo-title">React Redux TodoMVC</h1>
        <TodoLists data={this.state.tasks} toggleComplete={this.handleToggleComplete} deleteTask={this.deleteTask}/>
        <TodoCount totalCount={totalCount} totalCompleteCount={totalCompleteCount}/>
        <TodoPanel addTask={this.addTask}/>
      </div>
    )
  }
}