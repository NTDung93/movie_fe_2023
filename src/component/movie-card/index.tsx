import React, { FC } from 'react'
import { Movie } from '../../models/movies';
import "./index.scss"
interface MovieCardProps {
    movie: Movie;
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
    return (
        <div className='movie-card'>
            <img src={movie.image} alt="" />
            <span className='movie-card__title'>{movie.name}</span>
            <span className='movie-card__year'>{movie.year}</span>
        </div>
    )
}

export default MovieCard;