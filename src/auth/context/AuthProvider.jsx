import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './AuthReducer'
import { types } from '../actions/types'

const initialState = {
  logged: false
}

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return {
    logged: !!user,
    user: user
  }
}

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState, init)

  const login = async (user = '') => {
    dispatch({
      type: types.login,
      payload: user
    })
    localStorage.setItem('user', JSON.stringify(user))
  }

  const logout = async () => {
    dispatch({
      type: types.logout
    })
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
