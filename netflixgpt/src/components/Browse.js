import Header from "./Header";
import useNowPlayingMovies from "../hooks/UseNowPlayingMovie.js";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
