'use client';

import Header from "@/app/_components/header";
import LessonWindow from "@/app/_components/lesson-window";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import SignInCard from "../_components/signin-card";
import { dbGetAllLessons } from "../_services/lessons_services";
import { dbGetUserLessonById, dbUpdateLessonCompletionStatus } from "../_services/user_stats_services";

export default function Page() {
  const { user } = useUserAuth();
  const [LessonsList, setLessonsList] = useState([]);
  const [lessonStatuses, setLessonStatuses] = useState({});

  // Fetch all lessons
  useEffect(() => {
    if (user) {
      dbGetAllLessons(setLessonsList);
      dbUpdateLessonCompletionStatus(user.uid);
    }
  }, [user]);

  // Fetch user-specific lesson status for each lesson
  useEffect(() => {
    if (user && LessonsList.length > 0) {
      LessonsList.forEach((lesson) => {
        dbGetUserLessonById(user.uid, lesson.id).then((status) => {
          setLessonStatuses((prevStatuses) => ({
            ...prevStatuses,
            [lesson.id]: status,
          }));
        });
      });
    }
  }, [user, LessonsList]);

  return (
    <main className="h-screen dark:bg-darkRed dark:text-lightestRed">
      <Header />
      {user ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center mx-auto max-w-3xl">
          {LessonsList.map((lesson) => {
            let lessonUrl = `/${lesson.id}`;
            const status = lessonStatuses[lesson.id]; // Get status for this lesson
            return (
              <Link key={lesson.id} href={lessonUrl}>
                <LessonWindow
                  level={lesson.level}
                  description={lesson.desc}
                  status={status}
                />
              </Link>
            );
          })}
        </div>
      ) : (
        <SignInCard title={"To view lessons please sign in"} type={true} />
      )}
    </main>
  );
}