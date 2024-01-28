import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./redux/userSlice";
import { BG_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { enableSearch } from "./redux/searchSlice";
import { changeLanguage } from "./redux/ConfigSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const GPTSearchView = useSelector((store) => store.search.showGPTSearch);
  const dispatch = useDispatch();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGPTSearch = () => {
    dispatch(enableSearch());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44" src={BG_URL} alt="logo" />
      <div className="flex p-2">
        {GPTSearchView && (
          <select className="p-2 m-2 bg-gray-800 text-white" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}
        <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg" onClick={handleGPTSearch}>
          {GPTSearchView ? "Home Page" : "GPT Search"}
        </button>
        <img className="w-12 h-12" src={user?.photoURL} alt="usericon" />
        <button className="font-bold text-white" onClick={handleSignout}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
