import React, { useRef, useState } from "react";
import Header from "../Header";
import { HandleValidations } from "../../utils/validations";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import addUser from "../redux/userSlice";
import { NETFLIX_BG_URL, Photo_URL } from "../../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [isError, setIsError] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleForm = () => {
    const errorMessage = HandleValidations(email.current.value, password.current.value);
    setIsError(errorMessage);
    if (errorMessage) return;

    if (!isSignInForm) {
      //sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: Photo_URL,
          });
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsError(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsError(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={NETFLIX_BG_URL} alt="bg-img" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="p-4 my-4 w-full bg-[#333] text-lg"
        />
        {!isSignInForm && <input type="text" placeholder="Name" className="p-4 my-4 w-full bg-[#333] text-lg" />}
        <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-[#333] text-lg" />
        <p className="text-red-700 text-xl font-bold py-2">{isError}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleForm}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 text-[#737373]" onClick={toggleSignIn}>
          {isSignInForm ? " New to Netflix? Sign In" : "Already registered? Sign Up Now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
