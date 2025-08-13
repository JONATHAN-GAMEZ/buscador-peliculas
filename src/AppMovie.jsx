import { useState } from 'react'
import ImagenFlip from './ImagenFlip';
import './AppMovie.css'

export const AppMovie = () => {

    const [search, setSearch] = useState('')
    const [movieList, setMovieList] = useState(null)

    const urlBase = 'https://api.themoviedb.org/3/search/movie'
    const API_KEY = 'bb40f06a2597044d88f33451b32a56db'

    const handleInputChange = ({target}) => {
        setSearch(target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetchMovies()
    }

    const fetchMovies = async () => {
        try {
            const response = await fetch(`${urlBase}?query=${search}&api_key=${API_KEY}&language=es-ES`)
            const data = await response.json()

            // Filtrar las películas con poster_path válido
            const moviesWithPosters = data.results.filter(
                (movie) => movie.poster_path && movie.poster_path.trim() !== ""
            );

            setMovieList(moviesWithPosters)
            console.log(moviesWithPosters)
        } catch (error) {
            console.error('Ha ocurrido el siguiente error:', error)
        }
    }

    return (
        <div className="container">
            <h1 >Buscador de Peliculas</h1>
            <form onSubmit={handleSubmit} >
                <input 
                    type="text" 
                    placeholder='Escribi una pelicula' 
                    value={search}
                    onChange={handleInputChange}
                />
                <button >Buscar</button>
            </form>
            {movieList &&
                <div className='movie-list' >
                    {movieList.map((movie) => (
                        <ImagenFlip key={movie.id} movie={movie}  />
                    ))}
                </div>
            }
        </div>
    )
}