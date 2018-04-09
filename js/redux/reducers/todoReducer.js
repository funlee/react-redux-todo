import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/todoAction';

/**
 * 初始化 state
 */

const initState = {
  tasks: [
    { 'id': '001', 'task': '打开 github 官网', 'complete': true },
    { 'id': '002', 'task': '搜索关键词 funlee', 'complete': false },
    { 'id': '003', 'task': 'And Then Follow him', 'complete': false }
  ]
}

export default function reducer(state = initState, action) {
  console.log(state,action)
  switch(action.type) {
    case ADD_TODO :
      return {
        ...state,
        task: [...state.task,action.todo]
      }
    case TOGGLE_TODO:
      return {
        tasks: state.tasks.map(item =>
          (item.id == action.operate.id)
            ? { ...item, complete: !item.complete}
            : item
        )
      }
    default:
      return state
  }
}

