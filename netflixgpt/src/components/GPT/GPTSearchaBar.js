import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../../utils/languageConstant";
import openai from "../../utils/openai";
import { api_options } from "../../utils/constants";
import { addGPTMovieResult } from "../redux/searchSlice";

const GPTSearchaBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/" + movie + "&include_adult=false&language=en-US&page=1",
      api_options
    );
    const json = data.json();

    return json.results;
  };

  const handleGPTSearch = async () => {
    console.log(searchText.current.value);
    //API Call to GPT and get results

    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query" +
      searchText.current.value +
      "only name of 7 movies,comma separated";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    //Error Handling to be done

    //Array of movies
    const gptMovies = gptResults.choices?.messages?.content.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResult = await Promise.all(promiseArray);
    //storing the result into store
    dispatch(addGPTMovieResult({ movieNames: gptMovies, movieResult: tmdbResult }));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchHolder}
          ref={searchText}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg" onClick={handleGPTSearch}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchaBar;
