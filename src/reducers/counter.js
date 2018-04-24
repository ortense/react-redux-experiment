import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/types'

const initial = { counter: 0 }

const actionMap = {
  [INCREMENT_COUNTER]: (state, action) => ({ ...state, counter: state.counter + 1 }),
  [DECREMENT_COUNTER]: (state, action) => ({ ...state, counter: state.counter - 1 })
}

export const counter = (state = initial, action) =>
  actionMap[action.type]
    ? actionMap[action.type](state, action)
    : state
