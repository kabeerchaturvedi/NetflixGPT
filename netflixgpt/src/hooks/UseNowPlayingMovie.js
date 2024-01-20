import { api_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addMovie } from "../components/redux/moviesSlice";

const useNowPlayingMovies = () => {
  //TMDB API
  const dispatch = useDispatch();

  const movieLists = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", api_options);
    const json = await data.json();
    dispatch(addMovie(json.results));
  };

  useEffect(() => {
    movieLists();
  });
};

export default useNowPlayingMovies;
