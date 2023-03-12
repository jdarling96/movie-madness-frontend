import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import MovieMadnessApi from "../api/api";

const Home = () => {
    const [nowPlayingMovies, setNowPlayingMovies] = useState();
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        (async () => {
            const res = await MovieMadnessApi.getMovies("now_playing")
            setNowPlayingMovies(res.newData)
            console.log(res)
            setIsloading(false)
        })();
    }, [])

    if (isLoading) {
        return (
            <ClipLoader/>

        )
    }

    return (
        <div>
            <h2>This the data</h2>
            {nowPlayingMovies.map((m) => (
                <h2>{m.original_title
                }</h2>
            ))}

        </div>
    );


};

export default Home;