'use client'

import React, { useEffect } from 'react';
import Header from '../_components/header';
import Keyboard from '../_components/keyboard';
import ProgressionBar from '../_components/progression-bar';
import TextWindow from '../_components/text-window';
import { useUserAuth } from '../_utils/auth-context';
import SignInCard from '../_components/signin-card';

export default function Page() {
    const { user }  = useUserAuth();

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
                    <div className="flex justify-center items-center flex-row grow relative">
                        <div className="flex flex-col items-center">
                            <Keyboard />
                            <TextWindow />
                        </div>
                        <div className="">
                            <ProgressionBar />
                        </div>
                    </div>
                ) : (
                    <SignInCard  title={"To view lesson please sign in"} type={true}/>
                   
                )
            }
            
        </main>
    );
}
