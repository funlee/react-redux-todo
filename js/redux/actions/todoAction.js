export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function addTodo() {
  return {
    type: ADD_TODO
  }
}
export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    operate:{
      id:id
    }
  }
}
export function deleteTodo() {
  return {
    type: DELETE_TODO
  }
}
