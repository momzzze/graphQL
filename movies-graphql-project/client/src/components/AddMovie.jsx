import React from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { GET_DIRECTORS, ADD_MOVIE_MUTATION } from '../queries/queries'
import { useState } from 'react'


const AddMovie = () => {
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [directorId, setDirectorId] = useState('');

    const [addMovie] = useMutation(ADD_MOVIE_MUTATION)
    const { loading, error, data } = useQuery(GET_DIRECTORS)


    const renderDirectors = () => {
        if (loading) return <option disabled>Loading...</option>
        if (error) return <option disabled>Error...</option>
        return data.directors.map(director =>{
            return <option key={director.id} value={director.id}>{director.name}</option>
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addMovie({
            variables:{
                name,
                genre,
                directorId
            }
        })
    }

    return (
        <form id='add-movie' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="movie-name">Movie Name:</label>
                <input id='movie-name' name='movie-name' type="text" onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="movie-name">Genre:</label>
                <input id='genre' name='genre' type="text" onChange={(e) => setGenre(e.target.value)} />
            </div>
            <div>
                <label htmlFor="movie-name">Movie Name:</label>
                <select name="director" id="director" onChange={(e) => setDirectorId(e.target.value)}>
                    <option>Select a Director</option>
                    {renderDirectors()}
                </select>
            </div>
            <div>
                <button className='btn' type='submit'>Add New Movie</button>
            </div>
        </form>
    )
}

export default AddMovie