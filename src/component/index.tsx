import { FC, useEffect, useState } from 'react'
import { Movies } from '../models/movies';
import axios, { AxiosResponse } from "axios";

interface indexProps {
    api: string;
}

const Index: FC<indexProps> = ({ api }) => {
    const [movies, setMovies] = useState<Movies[]>([]);

    const handleFetchMoviesSuccess = (response: AxiosResponse<Movies[]>) => {
        setMovies(response.data);
        console.log(response.data);
    }

    const fetchMovie = () => {
        axios.get(api).then(handleFetchMoviesSuccess);
    }

    useEffect(fetchMovie, []);

    return (
        <div>
            {movies.map((movie: Movies) => {
                return (
                    <div className="movie">
                        <h2>{movie.name}</h2>
                        <img src={movie.image} width={200} alt="" />
                    </div>
                );
            })}
        </div>
    )
}

export default Index;