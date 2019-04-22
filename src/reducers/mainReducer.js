import { combineReducers } from 'redux'
import todos from './toDoReducer'
import visibilityFilter from './filterReducer'
import { connectRouter } from 'connected-react-router'

export default (history) => combineReducers({
  router: connectRouter(history),
  todos,
  visibilityFilter
})  

