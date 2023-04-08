import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import MovieMadnessApi from "../api/api";
import movieByFilter from "../hooks/movieByFilter";

const Home = () => {
    //const [nowPlayingMovies, setNowPlayingMovies] = useState();
    //const [isLoading, setIsloading] = useState(true);
    
   const movieObj = new movieByFilter()
     const [movies, isLoading, page, setPage] = movieObj.callRoute("popular")
    
    //console.log(movie);

    /* useEffect(() => {
        (async () => {
            const res = await MovieMadnessApi.getMovies("now_playing")
            setNowPlayingMovies(res.newData)
            console.log(res)
            setIsloading(false)
        })();
    }, []) */

   const handleClick = () =>{
    console.log("clicked")
    setPage(page + 1)
   }

     if (isLoading) {
        return (
            <ClipLoader/>

        )
    } 

    return (
        <div>
            <h2>This the data</h2>
            {movies.map((m) => (
                <h2>{m.original_title
                }</h2>
            ))}
            

            <button onClick={handleClick}>onc</button>

        </div>
    );


};

export default Home;