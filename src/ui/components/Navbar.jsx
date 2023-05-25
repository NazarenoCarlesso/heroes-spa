import { NavLink, useNavigate } from 'react-router-dom'
import Batman from '../../assets/heroes/dc-batman.jpg'

const isPath = ({ isActive: a }) => { a ? 'active' : '' }

export const Navbar = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    window.alert('LOGOUT')
    navigate('/')
  }

  return (
    <nav style={{ backgroundImage: '../../assets/heroes/dc-batman.jpg' }}>
      <img src={Batman} alt='Batman' />
      <h1>Heroes App</h1>
      <NavLink className='first' to='/'>
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
      <button onClick={handleLogout}>
        Logout
      </button>
    </nav>
  )
}
