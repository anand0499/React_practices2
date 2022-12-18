import React, { useContext, useState } from 'react'
import MovieContext from '../Store/MovieContext';

const Form = (props) => {
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [movies,setMovies]=useContext(MovieContext)
    

    const submitHandler=(e)=>{
        console.log(movies);
        e.preventDefault();
        setMovies((prevMovies)=>{
            return [...prevMovies,{name:name,age:age}];
        })
        setName("");
        setAge("");
    }

  return (
    <form onSubmit={submitHandler} >
        <label htmlFor=""></label><br />
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <label htmlFor=""></label>
        <input type="text"  value={age} onChange={(e)=>setAge(e.target.value)} />
        <button type="submit" >Submit</button>
    </form>
  )
}

export default Form