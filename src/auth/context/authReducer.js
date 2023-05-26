import { types } from '../actions/types'

export const authReducer = (state, action) => {
  const { type, payload } = action
  console.log(type, payload)
  switch (type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: payload
      }
    case types.logout:
      return {
        logged: false
      }
    default:
      return state
  }
}
