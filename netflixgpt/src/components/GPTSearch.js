import React from "react";
import GPTMovieSuggestions from "./GPT/GPTMovieSuggestions";
import GPTSearchaBar from "./GPT/GPTSearchaBar";
import { NETFLIX_BG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={NETFLIX_BG_URL} alt="bg-img" />
      </div>
      <GPTSearchaBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
