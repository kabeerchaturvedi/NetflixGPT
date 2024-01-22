import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.useNowPlayingMovies);

  //early return
  if (!movies) return null;

  let mainMovie = movies[0];
  console.log(mainMovie);

  const { originalTitle, overview } = mainMovie;
  return (
    <div>
      <VideoTitle title={originalTitle} overview={overview} />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
