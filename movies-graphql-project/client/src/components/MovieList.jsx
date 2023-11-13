import { useQuery } from '@apollo/client'
import { GET_MOVIES } from '../queries/queries'
import MovieDetails from './MovieDetails'
import { useState } from 'react'



const MovieList = () => {
  const [selectedMovie, setSelectedMovie] = useState(null)
  const { loading, error, data } = useQuery(GET_MOVIES)

  if (loading) return <p>Loading...</p>


  return (
    <div>
      <h1>Movie list</h1>
      <ul>
        {data?.movies.map(movie => <li key={movie.id} onClick={(e)=>setSelectedMovie(movie.id)}>{movie.name}</li>)}
      </ul>
      <MovieDetails selectedMovie={selectedMovie}/>
    </div>
  )
}

export default MovieList