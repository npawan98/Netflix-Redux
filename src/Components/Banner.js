import React, { useEffect, useState } from 'react'
import axios from '../axios'
import requests from '../Requests'
import "./Banner.css"

function Banner() {
    // fetching movie from database

    const[movie,setMovie] =useState([]);

    useEffect(()=>{

        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() *  request.data.results.length - 1)
                ]
            );
            return request;
        }

        fetchData();
    },[]);
    console.log(movie)


    function truncate( string,number){

        return string?.length>number ? string.substr(0,number-1) + '....' : string;
    }
    return (
        // header tag and div class = "header" are same
        <header className="banner" style = {{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
            backgroundPosition:"center center",
        }}>
        
    
        <div className = "banner__content">
             <h1 className = "banner__title">
             {movie.name || movie.title || movie.original_name}
             </h1>
             <div className = "banner__buttons">
             <button className = "banner__button">Play</button>
             <button className = "banner__button">My List</button>
             </div>
             <h1 className = "banner__description">
             { truncate(`${movie.overview}`,150)}
             </h1>
             
        </div>
        <div className = "banner__fadeBottom"/>
    </header> 
   
    )
}

export default Banner
