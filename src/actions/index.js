/*
 * action types
 */
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */
let nextTodoId = 0;

/*
 * action creators
 */

export const addTodo = (text) => {
  console.log('addTodo called...', text);
  return { type: ADD_TODO, id: nextTodoId++, text };
}

export const toggleTodo = (id) => {
  console.log("toggleTodo called...", id);
  return { type: TOGGLE_TODO, id };
}

export const setVisibilityFilter = (filter) => {
  console.log("setVisibilityFilter called...", filter);
  return { type: SET_VISIBILITY_FILTER, filter };
}