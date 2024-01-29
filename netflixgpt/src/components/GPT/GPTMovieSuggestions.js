import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../Movies/MovieList";

const GPTMovieSuggestions = () => {
  const { movieNames, movieResult } = useSelector((store) => store.search);
  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList key={movieName} title={movieName} movies={movieResult[index]} />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
