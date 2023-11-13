import { useQuery } from '@apollo/client';
import { GET_MOVIE } from '../queries/queries';


const MovieDetails = ({
    selectedMovie
}) => {
    const { loading, error, data } = useQuery(GET_MOVIE, {
        variables: { id: selectedMovie }
    })

    const renderMovieDetails = () => {
        const { movie } = data || {}

        if (movie) {
            return (
                <div>
                    <h2>{movie.name}</h2>
                    <p>{movie.genre}</p>
                    <p>Directed by: {movie.director.name}</p>
                    <p>All movies by this director</p>
                    <ul>
                        {movie.director.movies.map(movie => <li key={movie.id} value={movie.id}>{movie.name}</li>)}
                    </ul>
                </div>
            )
        } else{
            return <div><h2>No movie selected. Please Select Movie</h2></div>
        
        }
    }

    if (loading) return <p>Loading...</p>

    return (
        <div>
            {renderMovieDetails()}
        </div>
    )
}

export default MovieDetails