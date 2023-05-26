import { authReducer } from '../../../auth/context/authReducer'
import { types } from '../../../auth/actions/types'

describe('authReducer testing... ', () => {
  test('debe regresar el estado inicial', () => {
    const newState = authReducer({ logged: false }, {})
    expect(newState).toEqual({ logged: false })
  })

  test('debe de loggearse con login', () => {
    const user = {
      id: 1,
      user: 'Nazareno'
    }
    const action = {
      type: types.login,
      payload: user
    }
    const newState = authReducer({}, action)
    expect(newState).toEqual({ logged: true, user: user })
  })

  test('debe desloggearse con logout', () => {
    const initialState = {
      logged: true, user: {
        id: 1,
        user: 'Nazareno'
      }
    }
    const action = {
      type: types.logout
    }
    const newState = authReducer(initialState, action)
    expect(newState).toEqual({ logged: false })
  })
})
