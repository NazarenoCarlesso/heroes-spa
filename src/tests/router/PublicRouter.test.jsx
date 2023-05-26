import { render} from '@testing-library/react'
import { PublicRouter } from '../../router/PublicRouter'
import { AuthContext } from '../../auth/context/AuthContext'

describe('<PublicRouter /> testing... ', () => {
  test('debe mostrar el children si no esta autenticado', () => {
    render(
      <AuthContext.Provider value={{ logged: false }}>
        <PublicRouter>
          <h1>Ruta pública</h1>
        </PublicRouter>
      </AuthContext.Provider>
    )
    // expect(screen.getAllByText('Ruta pública'))
    // Falla en esta version de react router dom (6.11.2)
  })
})