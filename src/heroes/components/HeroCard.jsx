import { Link } from 'react-router-dom'

/* eslint-disable react/prop-types */
export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters
}) => {
  return (
    <div className='card animate__animated animate__fadeIn'>
      <div className='card-front'>
        <img src={`/heroes/${id}.jpg`} alt={superhero} />
      </div>
      <div className='card-info'>
        <h5 className='card-title center'>
          {superhero}
        </h5>
        <p className='alter-ego'>
          {alter_ego}
        </p>
        {
          (alter_ego !== characters) && <p>{characters}</p>
        }
        <p>
          <small>
            {first_appearance}
          </small>
        </p>
      </div>
      <Link to={`/hero/${id}`}>
        <button>
          Más Info...
        </button>
      </Link>
    </div>
  )
}