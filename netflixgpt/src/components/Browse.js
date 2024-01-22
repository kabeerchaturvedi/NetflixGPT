import Header from "./Header";
import useNowPlayingMovies from "../hooks/UseNowPlayingMovie.js";
import MainContainer from "./Movies/MainContainer.js";
import SecondaryContainer from "./Movies/SecondaryContainer.js";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
