import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
    EDIT_TODO,
    REMOVE_ALL_TODO
 } from '../actions/actionTypes'

const INITIAL_DATA = [
    {id:'1', text:'TODO 1 TEXT', completed: true},
    {id:'2', text:'TODO 2 TEXT', completed: false},
    {id:'3', text:'TODO 3 TEXT', completed: false}
]

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

        default:
        return state
    }
}

export default toDoReducer;