'use client';

import React, { useEffect, useState } from 'react';
import Header from '../_components/header';
import Keyboard from '../_components/keyboard';
import ProgressionBar from '../_components/progression-bar';
import TextWindow from '../_components/text-window';
import { useUserAuth } from '../_utils/auth-context';
import SignInCard from '../_components/signin-card';
import { dbGetAllLevelsByLessonId, dbGetLevelsById, dbGetLessonById } from '../_services/lessons_services';
import useTypingLogic from '../_functions/typing';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { dbGetUserLessonById, dbGetUserLessonLevelsById, dbUpdateLevelStatus } from '../_services/user_stats_services';

export default function Page() {
    const { user } = useUserAuth();
    const [text, setText] = useState("");
    const { lessonid } = useParams();
    const [levelList, setLevelList] = useState([]);
    const [allLessons, setAllLessons] = useState([]);
    const [lesson, setLesson] = useState([]);
    const [levelStatuses, setLevelStatuses] = useState([]);

    const [progress, setProgress] = useState();

    // Typing logic states
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentDataKeyToType, setCurrentDataKeyToType] = useState("");
    const [textToRead, setTextToRead] = useState("");

    const [pastText, setPastText] = useState("");
    const [letterToType, setLetterToType] = useState("");
    const [futureText, setFutureText] = useState("");
    const [correctLetterStatus, setCorrectLetterStatus] = useState(true);
    const isTypingComplete = currentIndex >= text.length;
    const [startTime, setStartTime] = useState(null);


    // Fetch levels and lessons when component mounts
    useEffect(() => {
        if (user) {
            dbGetAllLevelsByLessonId(lessonid, setLevelList);
            dbGetLessonById(lessonid, setLesson);
            dbGetUserLessonLevelsById(user.uid, lessonid, setLevelStatuses);
        }

    }, [user, lessonid]);

    // Fetch lessons for each level once levels are fetched
    useEffect(() => {
        if (levelList.length > 0) {
            const fetchLessonsForAllLevels = async () => {
                const lessons = await Promise.all(
                    levelList.map((level) =>
                        dbGetLevelsById(lessonid, level.id, (lessonData) => lessonData)
                    )
                );
                setAllLessons(lessons);
                if (lessons[0] && lessons[0].textToType) {
                    setProgress(1)
                    setTextToRead(lessons[0].textToRead);
                    setText(lessons[0].textToType);
                    setCurrentDataKeyToType(lessons[0].textToType[0]);
                    setLetterToType(lessons[0].textToType[0]);
                    setFutureText(lessons[0].textToType.slice(1));
                }
            };
            fetchLessonsForAllLevels();
        }
    }, [levelList]);

    // Handle typing logic
    useTypingLogic({
        text,
        currentIndex,
        setCurrentIndex,
        setCurrentDataKeyToType,
        setPastText,
        setLetterToType,
        setFutureText,
        setCorrectLetterStatus,
        startTime,
        setStartTime,
        isTypingComplete,
    });

    useEffect(() => {
        if (isTypingComplete) {
            console.log("Typing complete! Changing text...");
    
            if (allLessons.length > 0) {
                const currentLessonIndex = allLessons.findIndex((lesson) => lesson.textToType === text);
    
                if (currentLessonIndex >= 0) {
                    const currentLevelId = levelList[currentLessonIndex]?.id;
                    if (currentLevelId) {
                        dbUpdateLevelStatus(user.uid, lessonid, currentLevelId, true);
                    }
    
                    if (currentLessonIndex < allLessons.length - 1) {
                        // Handle the next lesson
                        const nextLesson = allLessons[currentLessonIndex + 1];
    
                        if (nextLesson && nextLesson.textToType) {
                            setProgress(currentLessonIndex + 2);
                            setText(nextLesson.textToType);
                            setTextToRead(nextLesson.textToRead);
                            setCurrentDataKeyToType(nextLesson.textToType[0]);
                            setLetterToType(nextLesson.textToType[0]);
                            setFutureText(nextLesson.textToType.slice(1));
    
                            setCurrentIndex(0);
                            setPastText("");
                            setCorrectLetterStatus(true);
                            setStartTime(null);
                        }
                    } else {
                        // Handle the last lesson
                        console.log("All lessons completed!");
                        setProgress(allLessons.length);
                    }
                }
            }
        }
    }, [isTypingComplete, allLessons, text]);
    
    
    return (
        <main className="h-screen dark:bg-darkRed flex flex-col dark:text-lightestRed">
            <Header />
            {user ? (
                <div className="flex flex-col items-center justify-center">
                    <div className="border-b-2 dark:border-b-red border-b-green w-[770px] flex flex-row items-center justify-between gap-4 pb-1">
                        <h2 className="text-lg">{lesson.desc}</h2>
                        <div className="text-start ml-4">
                            <Link href="/lessons">
                                <p className="underline">&lt; Go back</p>
                            </Link>
                        </div>                      
                    </div>
                    <div className="flex flex-col items-end justify-center mt-5 gap-2">
                        
                        <div className="flex justify-center items-start flex-row grow relative">
                            <div className="flex flex-col items-center justify-start">
                                <Keyboard currentKeyToType={currentDataKeyToType} />
                                <TextWindow
                                    textToRead={textToRead}
                                    pastText={pastText}
                                    letterToType={letterToType}
                                    futureText={futureText}
                                    correctLetter={correctLetterStatus}
                                />
                                
                            </div>
                            <div className="">
                                <ProgressionBar bars={levelList.length} progress={progress}/>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                
            ) : (
                <SignInCard title={"To view lesson please sign in"} type={true} />
            )}
        </main>
    );
}
