import { FC, useEffect, useState } from 'react'
import './style.scss'
import Background from '../../component/background';
import axios from 'axios';
import { Movie } from '../../models/movies';
import MovieCard from '../../component/movie-card';

const Home: FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const importAuto = () => {
    axios
      .get(`https://api.themoviedb.org/3/trending/all/week?api_key=a10ee5569194b352bcca20840b7f8a32&language=en-US`)
      .then((response) => {
        const myMovie = mapToMyMovies(response.data.results);

        axios
          .post('http://localhost:8080/movies', myMovie)
          .then(response => {
            console.log(response);
          })
      })
      .catch()
  }

  const mapToMyMovies = (responses: any) => {
    return responses.map((item: { title: any; poster_path: string; release_date: string; }) => {
      return {
        id: null,
        name: item.title,
        image: 'https://image.tmdb.org/t/p/original' + item.poster_path,
        year: item.release_date?.split("-")[0]
      }
    })
  }

  //fetch api get all movies in db
  useEffect(() => {
    axios
      .get(`http://localhost:8080/movie`)
      .then((response) => {
        setMovies(response.data)
      })
      .catch()
  }, [])

  return (
    <div className='home'>
      <Background />

      {/* <button onClick={importAuto}>Import Auto</button> */}

      <div className="list-movie-container">
        <div className="list-movie">
          {movies.map((movie) => {
            return <MovieCard movie={movie} key={movie.id} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Home;