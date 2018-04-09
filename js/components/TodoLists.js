import React, { Component } from 'react';
import { toggleTodo, deleteTodo } from '../redux/actions/todoAction';

import { connect } from 'react-redux';

class TodoLists extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { tasks } = this.props.lists
    const listDOM = tasks.map((item,index) => (
      <li className={item.complete ? 'active' : ''} key={`li-${index}`}>
        <span className="item-checked" onClick={() => this.props.toggleTodo(item.id)}></span>
        <span className="item-detail">{item.task}</span>
        <span className="item-delete">删除</span>
      </li>
    ))
    return (
      <ul className="todo-lists">
        {listDOM}
      </ul>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    lists: state.todoList
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: id => {
      dispatch(toggleTodo(id))
    },
    deleteTodo: () => {
      dispatch(deleteTodo())
    }
  }
};
// 容器组件就是使用 store.subscribe() 从 Redux state 树中读取部分数据，并通过 props 来把这些数据提供给要渲染的组件。
// 你可以手工来开发容器组件，但建议使用 React Redux 库的 connect() 方法来生成，
// 这个方法做了性能优化来避免很多不必要的重复渲染。

// connect接收两个参数，
// 一个mapStateToProps, 就是把redux的state，转为组件的Props，
// 还有一个参数是mapDispatchToprops,就是把发射actions的方法，转为Props属性函数。

export default connect(mapStateToProps, mapDispatchToProps)(TodoLists);
