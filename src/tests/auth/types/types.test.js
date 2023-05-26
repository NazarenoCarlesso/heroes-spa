import { types } from '../../../auth/actions/types'

describe('types testing...', () => {
  test('debe regresar estos types', () => {
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout'
    })
  })
})
