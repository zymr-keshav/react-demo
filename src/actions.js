/*
 * action types
 */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * other constants
 */
let nextTodoId = 0;
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action creators
 */

export function addTodo(text) {
  console.log('addTodo Called', text);
  return { type: ADD_TODO, id: nextTodoId++, text };
}

export function toggleTodo(index) {
  console.log("toggleTodo called", index);
  return { type: TOGGLE_TODO, index };
}

export function setVisibilityFilter(filter) {
  console.log("setVisibilityFilter called", filter);
  return { type: SET_VISIBILITY_FILTER, filter };
}