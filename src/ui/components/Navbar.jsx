import { NavLink, useLocation } from 'react-router-dom'
import Batman from '../../assets/heroes/dc-batman.jpg'

export const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <nav style={{ backgroundImage: '../../assets/heroes/dc-batman.jpg' }}>
      <img src={Batman} alt='Batman' />
      <h1>Heroes App</h1>
      <NavLink className='first' to='/'>
        <button className={pathname === '/' ? 'active' : null}>Home</button>
      </NavLink>
      <NavLink to='/marvel'>
        <button className={pathname === '/marvel' ? 'active' : null}>Marvel</button>
      </NavLink>
      <NavLink to='/dc'>
        <button className={pathname === '/dc' ? 'active' : null}>DC</button>
      </NavLink>
    </nav>
  )
}
