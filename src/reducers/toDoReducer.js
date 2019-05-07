import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
    EDIT_TODO,
    REMOVE_ALL_TODO,
    SET_INITIAL_TODOS
 } from '../actions/actionTypes'

const INITIAL_DATA = []

const toDoReducer = (state=INITIAL_DATA, action) => {
    switch (action.type){
        case ADD_TODO:
        return [
            ...state,{
                id: action.id,
                text: action.text,
                completed: false,
            }
        ]

        case REMOVE_TODO:
        return state.filter(todo => todo.id !== action.id);
        
        case TOGGLE_TODO:
        return state.map(toDo =>
            toDo.id === action.id ? { ...toDo, completed: !toDo.completed } : toDo
          );

        case EDIT_TODO:
        return state.map(toDo =>
            toDo.id === action.id ? { ...toDo, text: action.text } : toDo
          );
        
        case REMOVE_ALL_TODO:
          return []

        case SET_INITIAL_TODOS:
          return action.todos.map(toDo =>
              ({
                id: toDo.id,
                text: toDo.title,
                completed: toDo.completed,
              })
            );

        default:
        return state
    }
}

export default toDoReducer;