'use client';

import Header from "@/app/_components/header";
import CardRecord from "../_components/card-records";
import UserCard from "../_components/user-card";
import { useUserAuth } from "../_utils/auth-context";
import { useEffect, useState } from "react";
import SignInCard from "../_components/signin-card";
import {dbCalculateStatsWithKeyboard, dbCalculateStatsWithoutKeyboard, dbCountCompletedLevels, dbCountStatsWithKeyboard, dbCountStatsWithoutKeyboard, dbGetUserLessonsLevelsById } from "../_services/user_stats_services";

export default function Page() {

  const { user }  = useUserAuth();

  //Stats without Keyboard
  const [averageWpmWithoutKeyboard, setAverageWpmWithoutKeyboard] = useState(0)
  const [averageAccuracyWithoutKeyboard, setAverageAccuracyWithoutKeyboard] = useState(0)
  const [highestWpmWithoutKeyboard, setHighestWpmWithoutKeyboard] = useState(0)
  const [highestAccuracyWithoutKeyboard, setHighestAccuracyWithoutKeyboard] = useState(0)


  //Stats with Keyboard
  const [averageWpmWithKeyboard, setAverageWpmWithKeyboard] = useState(0)
  const [averageAccuracyWithKeyboard, setAverageAccuracyWithKeyboard] = useState(0)
  const [highestWpmWithKeyboard, setHighestWpmWithKeyboard] = useState(0)
  const [highestAccuracyWithKeyboard, setHighestAccuracyWithKeyboard] = useState(0)

  const [totalTests, setTotalTests] = useState(0);

  const [totalLessons, setTotalLessons] = useState()
  const [completedLevels, setCompletedLevels] = useState()


  useEffect(() => {

    if (user) {
      async function fetchStats() {
        const statsWithKeyboard = await dbCalculateStatsWithKeyboard(user.uid);
        const statsWithoutKeyboard = await dbCalculateStatsWithoutKeyboard(user.uid);
        const totalStatsWithKeyboard  = await dbCountStatsWithKeyboard(user.uid)
        const totalStatsWithoutKeyboard  = await dbCountStatsWithoutKeyboard(user.uid)
        const totalStats = totalStatsWithKeyboard + totalStatsWithoutKeyboard
        setAverageWpmWithKeyboard(statsWithKeyboard.averageWpm);
        setAverageAccuracyWithKeyboard(statsWithKeyboard.averageAccuracy);
        setHighestWpmWithKeyboard(statsWithKeyboard.highestWpm)
        setHighestAccuracyWithKeyboard(statsWithKeyboard.highestAccuracy)

        setAverageWpmWithoutKeyboard(statsWithoutKeyboard.averageWpm);
        setAverageAccuracyWithoutKeyboard(statsWithoutKeyboard.averageAccuracy);
        setHighestWpmWithoutKeyboard(statsWithoutKeyboard.highestWpm)
        setHighestAccuracyWithoutKeyboard(statsWithoutKeyboard.highestAccuracy)

        setTotalTests(totalStats);
        
        dbGetUserLessonsLevelsById(user.uid, setTotalLessons, setCompletedLevels)
        console.log(totalLessons)
      }

      fetchStats();
    }

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
          testsNumber={totalTests}/>

          {/* Card Records */}
          <div className="flex flex-col md:flex-row justify-center gap-6 w-full">
            <CardRecord
              title="Without helping keyboard"
              valueAverageType={averageWpmWithoutKeyboard}
              valueHighestType={highestWpmWithoutKeyboard}
              valueAverageAccuracy={averageAccuracyWithoutKeyboard}
              valueHighestAccuracy={highestAccuracyWithoutKeyboard}
            />
            <CardRecord
              title="With helping keyboard"
              valueAverageType={averageWpmWithKeyboard}
              valueHighestType={highestWpmWithKeyboard}
              valueAverageAccuracy={averageAccuracyWithKeyboard}
              valueHighestAccuracy={highestAccuracyWithKeyboard}
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
