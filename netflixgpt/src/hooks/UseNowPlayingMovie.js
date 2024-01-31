import { api_options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addMovie } from "../components/redux/moviesSlice";

const useNowPlayingMovies = () => {
  //TMDB API
  const dispatch = useDispatch();


  //Memoization
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

  const movieLists = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", api_options);
    const json = await data.json();
    dispatch(addMovie(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && movieLists();
  });
};

export default useNowPlayingMovies;
