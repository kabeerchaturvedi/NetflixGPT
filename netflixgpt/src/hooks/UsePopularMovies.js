import { api_options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addPopular } from "../components/redux/moviesSlice";

const usePopularMovies = () => {
  //TMDB API
  const dispatch = useDispatch();


  //Memoization
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const movieLists = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular", api_options);
    const json = await data.json();
    dispatch(addPopular(json.results));
  };

  useEffect(() => {
    !popularMovies && movieLists();
  },[]);
};

export default usePopularMovies;
