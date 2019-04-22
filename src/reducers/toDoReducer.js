import {
    ADD_TODO,
    REMOVE_TODO,
    COMPLETE_TODO,
    REMOVE_ALL_TODO
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
        
        case COMPLETE_TODO:
        return state.map(toDo =>
            toDo.id === action.id ? { ...toDo, completed: !toDo.completed } : toDo
          );

        case REMOVE_ALL_TODO:
          return INITIAL_DATA

        default:
        return state
    }
}

export default toDoReducer;