import React from "react";
import Header from "../Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="
          https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bg-img"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white">
        <h1 className="text-3xl py-4">Sign In</h1>
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-4 my-2 w-full bg-[#333] text-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-[#333] text-lg"
        />
        <button className="p-4 my-4 bg-red-700 w-full">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
