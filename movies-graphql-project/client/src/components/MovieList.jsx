import { useQuery } from '@apollo/client'
import { GET_MOVIES } from '../queries/queries'



const MovieList = () => {

  const { loading, error, data } = useQuery(GET_MOVIES)

  if (loading) return <p>Loading...</p>


  return (
    <div>
      <h1>Movie list</h1>
      <ul>
        {data?.movies.map(movie => <li key={movie.id}>{movie.name}</li>)}
      </ul>

    </div>
  )
}

export default MovieList