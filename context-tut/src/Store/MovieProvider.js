import React, { useState } from "react";
import MovieContext from "./MovieContext";

const MovieProvider = (props) => {
    const [movies,setMovies]=useState([
        {name:"Anand",age:22,id:1},
        {name:"Mukesh",age:23,id:2},
        {name:"Manish",age:23,id:3}
    ])
  return (
    <MovieContext.Provider value={[movies,setMovies]} >
        {props.children}
    </MovieContext.Provider>
  )
};

export default MovieProvider;
