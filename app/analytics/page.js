'use client';

import Header from "@/app/_components/header";
import CardRecord from "../_components/card-records";
import UserCard from "../_components/user-card";
import { useUserAuth } from "../_utils/auth-context";
import { useEffect } from "react";
import SignInCard from "../_components/signin-card";

export default function Page() {

  const { user }  = useUserAuth();

  useEffect(() => {

    // if(user){
    //     dbGetItemsByUser(user.uid, setItemList)
    // }

    }, [user]
)

  return (
    <main className="h-screen flex flex-col dark:bg-darkRed dark:text-lightestRed">
      <Header />
      {
        user ? (
          <div className="flex flex-col items-center h-full w-screen">
        <div className="flex flex-col w-[75%] gap-6">
          {/* User Info Card */}
          <UserCard
          userName={user.displayName || user.email}
          testsNumber={34}/>

          {/* Card Records */}
          <div className="flex flex-col md:flex-row justify-center gap-6 w-full">
            <CardRecord
              title="Without helping keyboard"
              valueAverageType={65}
              valueHighestType={120}
              valueAverageAccuracy={98}
              valueHighestAccuracy={100}
            />
            <CardRecord
              title="With helping keyboard"
              valueAverageType={60}
              valueHighestType={110}
              valueAverageAccuracy={95}
              valueHighestAccuracy={98}
            />
          </div>
        </div>
      </div>

        ) : (
          <SignInCard title={"To track your progress and records please sign in."} type={true}/>
        )
      }
      
    </main>
  );
}
