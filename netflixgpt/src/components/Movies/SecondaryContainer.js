import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movieData = useSelector((store) => store.movies);

  return (
    movieData && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-0">
          <MovieList title={"Now Playing"} movies={movieData.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movieData.popularMovies} />
          <MovieList title={"Popular"} movies={movieData.nowPlayingMovies} />
          <MovieList title={"Upcoming"} movies={movieData.nowPlayingMovies} />
          <MovieList title={"Horror"} movies={movieData.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
