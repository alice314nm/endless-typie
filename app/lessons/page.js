'use client';


import Header from "@/app/_components/header";
import LessonWindow from "@/app/_components/lesson-window";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import SignInCard from "../_components/signin-card";
import { dbGetAllLessons } from "../_services/lessons_services";

export default function Page() {
  const { user }  = useUserAuth();

  const [LessonsList, setLessonsList] = useState([]);

  useEffect(() => {

      if(user){
          dbGetAllLessons(setLessonsList)
      }
  
      }, [user]
  )

  return (
    <main className="h-screen dark:bg-darkRed dark:text-lightestRed">
        <Header />
        {
          user ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center mx-auto max-w-3xl">
              {
                LessonsList.map( (lesson) => {

                    let lessonUrl = `/${lesson.id}`;

                    return (
                        <Link key={lesson.id} href={lessonUrl}>
                            <LessonWindow level={lesson.level} description={lesson.desc} status={2} />
                        </Link>
                    )
                })
              }

                {/* <Link href="/lesson_template"><LessonWindow level="1" description="Introduction" status={2} /></Link>
                <LessonWindow level="2" description="Middle row" status={1} />
                <LessonWindow level="3" description="Top row" status={0} />
                <LessonWindow level="4" description="Bottom row" status={0} />
                <LessonWindow level="5" description="Numbers and signs" status={0} />
                <LessonWindow level="6" description="Control" status={0} /> */}
            </div>
          ) : (
            <SignInCard title={"To view lessons please sign in"} type={true}/>
          )
        }
        
    </main>
  );
}

