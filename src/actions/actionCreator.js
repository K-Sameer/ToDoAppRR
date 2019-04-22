import {
  ADD_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
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

export const completeTodo = id => ({
  type: COMPLETE_TODO,
  id,
});

export const removeAllTodo = id => ({
  type: REMOVE_ALL_TODO,
  id,
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});
