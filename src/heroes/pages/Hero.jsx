import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById'
import { useMemo } from 'react'

export const Hero = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const hero = useMemo(() => getHeroById(id), [id])
  if (!hero) { return <Navigate to='/marvel' /> }

  const { superhero, alter_ego, characters, first_appearance, publisher } = hero

  const handleNavigateBack = () => {
    return navigate(publisher === 'DC Comics' ? '/dc' : '/marvel')
  }

  return (
    <div className='row hero-detail'>
      <img
        className='hero-img animate__animated animate__fadeInLeft'
        src={`/heroes/${id}.jpg`}
        alt={superhero}
      />
      <div className='hero-info'>
        <h3>{superhero}</h3>
        <ul>
          <li>
            <b className='alter-ego'>Alter ego: {alter_ego}</b>
          </li>
          <li>
            <b className='alter-ego'>Publisher: {publisher}</b>
          </li>
          <li>
            <b className='alter-ego'>First appearance: {first_appearance}</b>
          </li>
        </ul>
        <h5 className='characters'>Characters</h5>
        <p className='characters-list'>{characters}</p>
        <button onClick={handleNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  )
}
