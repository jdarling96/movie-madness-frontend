import React, { useState, useEffect } from "react";

const getMovies = new movieByFilter();
const [movies, isLoading, page, setPage] = getMovies.callRoute("top_rated");

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