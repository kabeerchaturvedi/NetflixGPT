import { api_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addPopular } from "../components/redux/moviesSlice";

const usePopularMovies = () => {
  //TMDB API
  const dispatch = useDispatch();

  const movieLists = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular", api_options);
    const json = await data.json();
    dispatch(addPopular(json.results));
  };

  useEffect(() => {
    movieLists();
  });
};

export default usePopularMovies;
