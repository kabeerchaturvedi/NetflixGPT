import Header from "./Header";
import useNowPlayingMovies from "../hooks/UseNowPlayingMovie.js";

import SecondaryContainer from "./Movies/SecondaryContainer.js";
import MainContainer from "./Movies/MainContainer.js";
import usePopularMovies from "../hooks/UsePopularMovies.js";
import GPTSearch from "./GPTSearch.js";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      <GPTSearch />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
