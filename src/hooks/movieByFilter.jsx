import React, { useContext, useEffect, useState } from "react";
import MovieMadnessApi from "../api/api";
function movieByFilter() {
  return {
    callRoute: function callRoute(route) {
      const [movies, setMovies] = useState();
      const [isLoading, setIsloading] = useState(true);
      const [page, setPage] = useState(1);

      useEffect(() => {
        async function getMovies() {
          console.debug("hooks getMovies useEffect");
          const res = await MovieMadnessApi.getMovies(route, page);
          console.log(res);
          setMovies(res.newData);
          setIsloading(false);
        }
        getMovies();
      }, [page]);

      return [movies, isLoading, page, setPage];
    },
    MovieCard:function Movie(title, language, overview, poster, release, vote, voteCount,){
      return <Movie></Movie>

    }
  };
};

export default movieByFilter;
