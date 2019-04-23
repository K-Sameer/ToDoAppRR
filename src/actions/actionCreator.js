import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  REMOVE_ALL_TODO,
  SET_VISIBILITY_FILTER,
} from './actionTypes';

const uuidv4 = require('uuid/v4');

export const addTodo = text => ({
  type: ADD_TODO,
  id: uuidv4(),
  text,
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id,
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

export const removeAllTodo = () => ({
  type: REMOVE_ALL_TODO
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});
