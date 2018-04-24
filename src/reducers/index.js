import { combineReducers } from 'redux'
import { hello } from './hello'
import { counter } from './counter'

export const Reducers = combineReducers({
  helloState: hello,
  counterState: counter
})
