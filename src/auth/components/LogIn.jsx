import { useNavigate } from 'react-router-dom'

export const LogIn = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    window.alert('LOGIN')
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
          <input />
          <label>Password</label>
          <input />
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
