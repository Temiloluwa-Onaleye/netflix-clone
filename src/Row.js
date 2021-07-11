import { any } from 'prop-types';
import React, { useState, useEffect } from 'react'
import axios from './axios';
import requests from './requests';
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row ({title, fetchUrl}) {
    const [movies, setMovies] = useState([ ]);

// A snippet of code which runs on specific conditions/variable
useEffect(( ) => {
//if [ ], run once when the function is called and dont run again
async function fetchdata ( ) {
const request =await axios.get(fetchUrl);
setMovies(request.data.results);
return request;
}
fetchdata( );
}, [ fetchUrl]);

console.table(movies);
    return (

        <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
            
            {/*several row_posters */}
            {movies.map(movie => (

                <img 
                key={movie.id}
                className="row_poster"
                src={`${base_url}${movie.poster_path}`} alt={movie.name} />
            ))}
            </div>
        </div>
    )
}

export default Row
