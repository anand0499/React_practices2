import React, { useContext } from 'react'
import MovieContext from '../Store/MovieContext';

const MoviesList = () => {
    const [movies]=useContext(MovieContext);
  return (
    <div>{
      movies.map((movie)=>{
        return (
          <div key={movie.id}>
                <h4>{movie.name}</h4>
                <h5>{movie.age}</h5>
          </div>
        )
      })
    }</div>
  )
}

export default MoviesList