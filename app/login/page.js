'use client';

import { useEffect, useState } from "react";
import Header from "../_components/header";
import SignInCard from "../_components/signin-card";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";


export default function Page() {

  const { user, googleSignIn, doSignInUserWithEmailAndPassword, resetPassword} = useUserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [resetPasswordMode, setResetPasswordMode] = useState(false);


  useEffect(() => {
  
    //   if(user){
    //       dbGetItemsByUser(user.uid, setItemList)
    //   }
  
      }, [user]
    )

    const handleSignIn = async (e) => {
      e.preventDefault();
      try {
        await doSignInUserWithEmailAndPassword(email, password);
        setError("");
      } catch (err) {
        if (err.code === "auth/user-not-found") {
          setError("No account found with this email.");
        } else if (err.code === "auth/invalid-credential") {
          setError("Incorrect password. Please try again.");
        } else if (err.code === "auth/missing-password") {
          setError("Please enter password to log in.");
        } else if (err.code === "auth/invalid-email") {
          setError("Please enter valid email to log in.");
        } else {
          setError(err.message);
        }
      }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      setEmail("");
      setResetPasswordMode(false);
    } catch (err) {
      setError(err.message);
    }
  };

    return (
      <main className="h-screen dark:bg-darkRed flex flex-col dark:text-lightestRed">
        <Header />

        {user ? 
        (
        <SignInCard title={"You're already signed in"} type={false} />
        ) : resetPasswordMode ? 
        (
          <div className="flex flex-col mt-16 gap-2 items-center justify-center">
            <h2 className="text-xl">Reset Password</h2>
            <form className="flex flex-col gap-2 items-center justify-center" onSubmit={handleResetPassword}>
              <input
                className="bg-lightGreen border-b-4 placeholder-darkGreen border-b-green p-2 w-72 focus:bg-lightestGreen focus:outline-none focus:ring-0 dark:bg-darkRed dark:border-b-red dark:placeholder-lightestRed dark:focus:bg-lightRed"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="mt-2 bg-green border-2 p-2 rounded-lg w-72 border-green hover:bg-lightGreen dark:bg-red dark:border-red dark:hover:bg-darkRed"
              >
                Send Reset Link
              </button>
              <button
                type="button"
                className="mt-2 text-sky-500 underline"
                onClick={() => setResetPasswordMode(false)} // Close reset form
              >
                Back to Login
              </button>
            </form>
          </div>
        ) : 
        (
          <div className="flex flex-col mt-16 gap-2 items-center justify-center">
            <h2 className="text-xl">Login</h2>
            {error && <p className="text-red-500">{error}</p>}
            <button
              onClick={googleSignIn}
              className="mt-2 dark:border-lightestRed dark:hover:bg-red dark:hover:text-lightestRed hover:bg-lightGreen bg-white flex flex-row p-2 items-center justify-center gap-2 border rounded-full border-darkGreen w-72 dark:bg-darkRed dark:text-lightestRed"
            >
              <img src="google-icon.svg" width={20} />
              <p>Login with Google</p>
            </button>
            <form className="flex flex-col gap-2 items-center justify-center" onSubmit={handleSignIn}>
              <input
                className="bg-lightGreen border-b-4 placeholder-darkGreen border-b-green p-2 w-72 focus:bg-lightestGreen focus:outline-none focus:ring-0 dark:bg-darkRed dark:border-b-red dark:placeholder-lightestRed dark:focus:bg-lightRed"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="bg-lightGreen border-b-4 placeholder-darkGreen border-b-green p-2 w-72 focus:bg-lightestGreen focus:outline-none focus:ring-0 dark:bg-darkRed dark:border-b-red dark:placeholder-lightestRed dark:focus:bg-lightRed"
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="mt-2 bg-green border-2 p-2 rounded-lg w-72 border-green hover:bg-lightGreen dark:bg-red dark:border-red dark:hover:bg-darkRed"
              >
                Login
              </button>
              <p
                className="text-sky-500 underline"
                onClick={() => setResetPasswordMode(true)} // Open reset password form
              >
                Forgot password?
              </p>
              <Link href="/signin">
                No account? <span className="text-sky-500 underline">Sign in</span>
              </Link>
            </form>
          </div>
        )}
    </main>
    );
}



