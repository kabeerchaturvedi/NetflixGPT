import React from "react";
import GPTMovieSuggestions from "./GPT/GPTMovieSuggestions";
import GPTSearchaBar from "./GPT/GPTSearchaBar";
import { NETFLIX_BG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover" src={NETFLIX_BG_URL} alt="bg-img" />
      </div>
      <div>
        <GPTSearchaBar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
