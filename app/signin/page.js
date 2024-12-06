"use client";

import Header from "../_components/header";
import SignInCard from "../_components/signin-card";
import { useUserAuth } from "../_utils/auth-context";
import { useState } from "react";

export default function Home() {
  const { user, googleSignIn,  doCreateUserWithEmailAndPassword} = useUserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await doCreateUserWithEmailAndPassword(email, password);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };


  return (
    <main className="h-screen dark:bg-darkRed flex flex-col dark:text-lightestRed">
      <Header />

      {user ? (
        <SignInCard title={"You're already signed in"} type={false} />
      ) : (
        <div className="flex flex-col mt-16 gap-2 items-center justify-center">
          <h2 className="text-xl">Sign in</h2>

          <button
            onClick={googleSignIn}
            className="mt-2 dark:border-lightestRed dark:hover:bg-red dark:hover:text-lightestRed hover:bg-lightGreen bg-white flex flex-row p-2 items-center justify-center gap-2 border rounded-full border-darkGreen w-72 dark:bg-darkRed dark:text-lightestRed"
          >
            <img src="google-icon.svg" width={20} />
            <p>Sign in with Google</p>
          </button>

          <form className="flex flex-col gap-2 items-center justify-center">
            <input
              className="bg-lightGreen border-b-4 placeholder-darkGreen border-b-green p-2 w-72 focus:bg-lightestGreen focus:outline-none focus:ring-0 dark:bg-darkRed dark:border-b-red dark:placeholder-lightestRed dark:focus:bg-lightRed"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="bg-lightGreen border-b-4 placeholder-darkGreen border-b-green p-2 w-72 focus:bg-lightestGreen focus:outline-none focus:ring-0 dark:bg-darkRed dark:border-b-red dark:placeholder-lightestRed dark:focus:bg-lightRed"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              className="bg-lightGreen border-b-4 placeholder-darkGreen border-b-green p-2 w-72 focus:bg-lightestGreen focus:outline-none focus:ring-0 dark:bg-darkRed dark:border-b-red dark:placeholder-lightestRed dark:focus:bg-lightRed"
              placeholder="Repeat Password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />

            {error && <p className="text-red-500">{error}</p>}

          

            <button
              onClick={handleSignUp}
              className="mt-2 bg-green border-2 p-2 rounded-lg w-72 border-green hover:bg-lightGreen dark:bg-red dark:border-red dark:hover:bg-darkRed"
            >
              Sign In
            </button>
          </form>
        </div>
      )}
    </main>
  );
}
