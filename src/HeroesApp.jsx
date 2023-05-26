import { Outlet } from 'react-router-dom'
import { Navbar } from './ui/components/NavBar'
import { AuthProvider } from './auth/context/AuthProvider'

const HeroesApp = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Outlet />
    </AuthProvider>
  )
}

export default HeroesApp
