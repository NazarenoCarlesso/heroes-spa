import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import queryString from 'query-string'
import { getHeroesByName } from '../helpers/getHeroesByName'
import { HeroCard } from '../components/HeroCard'

export const Search = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { q: query = '' } = queryString.parse(location.search)
  const heroes = getHeroesByName(query)

  const { searchText, onInputChange } = useForm({
    searchText: query
  })

  const onSearchSubmit = (e) => {
    e.preventDefault()
    if (searchText.trim().length === 0) return;

    navigate(`?q=${searchText.trim().toLowerCase()}`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div>
        <h4>Searching</h4>
        <hr />
        <form onSubmit={onSearchSubmit}>
          <input
            type='text'
            placeholder='Batman, Hulk, Cyclops...'
            name='searchText'
            autoComplete='off'
            value={searchText}
            onChange={onInputChange}
          />
          <button>
            Search
          </button>
        </form>
      </div>
      <div>
        <h4>Results</h4>
        <hr />
        {
          query.trim().length === 0 && (
            <div className='alert'>
              Search a hero
            </div>
          )
        }
        {
          heroes.length === 0 && query.trim().length > 0
            ? (
              <div className='warning'>
                No heroe with <b>{query}</b>
              </div>
            )
            : (
              <ul className='grid'>
                {
                  heroes.map(hero => <HeroCard key={hero.id} {...hero} />)
                }
              </ul>
            )
        }
      </div>
    </>
  )
}
