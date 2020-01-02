import { createStore, combineReducers } from 'redux'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
  user: usersReducer
})

const store = createStore(rootReducer)

export default store
