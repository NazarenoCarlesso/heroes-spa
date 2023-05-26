import { createBrowserRouter } from 'react-router-dom'
import HeroesApp from '../HeroesApp.jsx'
import { SignIn } from '../auth/pages/SignIn.jsx'
import { Marvel } from '../heroes/pages/Marvel.jsx'
import { Dc } from '../heroes/pages/DC.jsx'
import { NotFound } from '../heroes/pages/NotFound.jsx'
import { Hero } from '../heroes/pages/Hero.jsx'
import { Search } from '../heroes/pages/Search.jsx'
import { PrivateRouter } from './PrivateRouter.jsx'
import { PublicRouter } from './PublicRouter.jsx'

// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter([
  {
    path: '/',
    element: <HeroesApp />,
    children: [{
      path: '/',
      element: <PublicRouter />,
      children: [{
        path: '/signin',
        element: <SignIn />
      }]
    }, {
      path: '/',
      element: <PrivateRouter />,
      children: [{
        path: '/marvel',
        element: <Marvel />
      }, {
        path: '/dc',
        element: <Dc />
      }, {
        path: '/hero/:id',
        element: <Hero />
      }, {
        path: '/search',
        element: <Search />
      }]
    }],
    errorElement: <NotFound />
  },
])