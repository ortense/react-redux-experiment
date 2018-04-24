import { UPDATE_MESSAGE } from '../actions/types'

const initialState = { message: 'Redux' }

const actionMap = {
  [UPDATE_MESSAGE]: (state, action) => ({ ...state, message: `${action.newValue}!` })
}

export const hello = (state = initialState, action) =>
  actionMap[action.type]
    ? actionMap[action.type](state, action)
    : state
