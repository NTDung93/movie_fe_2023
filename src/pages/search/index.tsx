import React, { FC, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './index.scss'
import MovieCard from '../../component/movie-card';
import { Movie } from '../../models/movies';
import axios from 'axios';

const Search: FC = () => {
    const { keyword } = useParams();

    const [movies, setMovies] = useState<Movie[]>([]);

    //mỗi lần keyword (slug router) đổi thì re-call api
    useEffect(() => {
        axios
            .get(`http://localhost:8080/movie-by-name?movieName=${keyword}`)
            .then((response) => {
                setMovies(response.data)
            })
            .catch()
    }, [keyword])

    // const movie: Movie = {
    //     name: "Spider-man (2002)",
    //     image: "https://images2.thanhnien.vn/528068263637045248/2023/6/1/spider-man-across-the-spider-verse-poster-16850724641101103572976-168564586504456671684.jpg",
    //     year: "May 1, 2002"
    // }

    return (
        <div className='search-page'>
            <div className="search-page__content">
                <h3>Search results for {keyword}</h3>

                <div className="list-movie">
                    {movies.map((movie) => {
                        return <MovieCard movie={movie} key={movie.id}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Search;