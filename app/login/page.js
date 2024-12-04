'use client';

import { useEffect } from "react";
import Header from "../_components/header";
import SignInCard from "../_components/signin-card";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {

  const { user, firebaseSignOut } = useUserAuth();
  useEffect(() => {
  
    //   if(user){
    //       dbGetItemsByUser(user.uid, setItemList)
    //   }
  
      }, [user]
    )

  return (
    <main className="h-screen dark:bg-darkRed flex flex-col dark:text-lightestRed">
      <Header />

      {
        user ? (
          <SignInCard title={"You're already signed in"} type={false}/>         
        ) : (
          <form className="flex flex-col mt-16 gap-2 items-center justify-center">
            <h2 className="text-xl">Login</h2>
            
            <button className="mt-2 dark:border-lightestRed dark:hover:bg-red dark:hover:text-lightestRed hover:bg-lightGreen bg-white flex flex-row p-2 items-center justify-center gap-2 border rounded-full border-darkGreen w-72 dark:bg-darkRed dark:text-lightestRed">
                <img 
                src="google-icon.svg"
                width={20}/>
                <p>Login with Google</p>
            </button>
            <input 
              className="bg-lightGreen border-b-4 placeholder-darkGreen border-b-green p-2 w-72 focus:bg-lightestGreen focus:outline-none focus:ring-0 dark:bg-darkRed dark:border-b-red dark:placeholder-lightestRed dark:focus:bg-lightRed" 
              placeholder="email" 
            />
            <input 
              className="bg-lightGreen border-b-4 placeholder-darkGreen border-b-green p-2 w-72 focus:bg-lightestGreen focus:outline-none focus:ring-0 dark:bg-darkRed dark:border-b-red dark:placeholder-lightestRed dark:focus:bg-lightRed" 
              placeholder="password" 
            />        
            <button className="mt-2 bg-green border-2 p-2 rounded-lg w-72 border-green hover:bg-lightGreen dark:bg-red dark:border-red dark:hover:bg-darkRed">Login</button>
            <a className="text-sky-500 underline">Forgot password?</a>
            <a href="/signin">No account? <span className="text-sky-500 underline">Sign in</span></a>
      </form>
        )
      }
      
    </main>
  );
}



