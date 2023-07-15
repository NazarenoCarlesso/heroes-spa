import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../auth/context/AuthContext'

const isPath = ({ isActive: a }) => { a ? 'active' : '' }

export const Navbar = () => {
  const navigate = useNavigate()
  const { user, logout } = useContext(AuthContext)

  const handleLogout = () => {
    logout()

    navigate('/')
  }

  return (
    <nav>
      <h1>Heroes App</h1>
      <h3>A fantastic web for comic fans</h3>
      <NavLink to='/'>
        <button className={String(isPath)}>
          Home
        </button>
      </NavLink>
      <NavLink to='/marvel'>
        <button className={String(isPath)}>
          Marvel
        </button>
      </NavLink>
      <NavLink to='/dc'>
        <button className={String(isPath)}>
          DC
        </button>
      </NavLink>
      <NavLink to='/search'>
        <button className={String(isPath)}>
          Search
        </button>
      </NavLink>
      <button>{user ? user.name : '-----'}</button>
      <button onClick={handleLogout}>
        Logout
      </button>
    </nav>
  )
}
