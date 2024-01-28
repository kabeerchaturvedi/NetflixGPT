import Header from "./Header";
import useNowPlayingMovies from "../hooks/UseNowPlayingMovie.js";

import SecondaryContainer from "./Movies/SecondaryContainer.js";
import MainContainer from "./Movies/MainContainer.js";
import GPTSearch from "./GPTSearch.js";
import usePopularMovies from "../hooks/UsePopularMovies.js";
import { useSelector } from "react-redux";

const Browse = () => {
  const GPTSearchView = useSelector((store) => store.search.showGPTSearch);
  console.log(GPTSearchView);

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {GPTSearchView ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer /> <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
