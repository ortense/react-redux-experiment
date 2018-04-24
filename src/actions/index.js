import { UPDATE_MESSAGE, INCREMENT_COUNTER, DECREMENT_COUNTER } from './types'

export const updateMessage = value => ({
  type: UPDATE_MESSAGE,
  newValue: value
})

export const incrementCounter = () => ({
  type: INCREMENT_COUNTER
})

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER
})
