import React, { useEffect, useState } from 'react'
import axios from '../axios'
import './Row.css'
import requests from '../Requests';
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"


function Row({title,fetchUrl, isLargeRow = false}) {
    const [movies,setMovies] = useState([]);
    const[trailerUrl,setTrailerUrl] = useState("");
    const base_url = "https://image.tmdb.org/t/p/original/"
    useEffect(()=>{

        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return requests;
        }
        fetchData();
    },[fetchUrl])

    const opts = {
        height: "390",
        width:"100%",
        playerVars:{

            autoplay:1,
        }
    }


    const handleClick = (movie) =>{
        if(trailerUrl){
            setTrailerUrl('');
        }else{
            //movietrailer - npm module
            movieTrailer(movie?.name || "") 
            .then((url) => {

                //slicing the url
                // https://www.youtube.com/watch?v=JeVYNSMFw3k&list=RDJeVYNSMFw3k&start_radio=1
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v')); //getting the value of v in the url

            }).catch((error)=>console.log(error));
        }

    }


console.log(movies)
    return (
        <div className = "row">
            <h2>{title}</h2>
            {/*fetching movies*/}
            <div className="row__posters">
            {movies.map((movie) => (
                // removing deadlinks
                ((isLargeRow && movie.poster_path) || 
                (!isLargeRow && movie.backdrop_path)) && (
                    <img 
                    onClick={()=>handleClick(movie)}
                    className = {`row__poster ${isLargeRow && "row__posterLarge"}`}
                    key = {movie.id}
                    src = {`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`} alt = {movie.name}/>
                )
                
            ))}
            
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts = {opts} />}
            
           
        </div>
    )
}

export default Row
