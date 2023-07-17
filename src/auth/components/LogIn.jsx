import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const LogIn = () => {
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const handleLogin = () => {
    login({
      id: 1,
      name: 'Nazareno'
    })

    navigate('/marvel', {
      replace: true
    })
  }

  return (
    <div className='form-container'>
      <p className='login-title'>Login</p>
      <form className='login-form'>
        <div className='input-group'>
          <label>Username</label>
          <input
            type='text'
            autoComplete={false}
          />
          <label>Password</label>
          <input
            type='password'
            autoComplete={false}
          />
          <a>Forgot Password ?</a>
        </div>
        <button onClick={handleLogin}>
          Sign In
        </button>
      </form>
      <p className='login-sub'>Login with social accounts</p>
      <p className='login-sub'>{"Don't have an account?"} <a>Sign Up</a></p>
    </div>
  )
}
