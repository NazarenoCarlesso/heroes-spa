import { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

// eslint-disable-next-line react/prop-types
export const HeroesList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

  return (
    <ul className='grid'>
      {
        heroes.map(hero => <HeroCard key={hero.id} {...hero} />)
      }
    </ul>
  )
}
