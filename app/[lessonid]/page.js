'use client';

import React, { useEffect, useState } from 'react';
import Header from '../_components/header';
import Keyboard from '../_components/keyboard';
import ProgressionBar from '../_components/progression-bar';
import TextWindow from '../_components/text-window';
import { useUserAuth } from '../_utils/auth-context';
import SignInCard from '../_components/signin-card';
import { dbGetAllLevelsByLessonId, dbGetLessonById } from '../_services/lessons_services';
import useTypingLogic from '../_functions/typing';
import { useParams } from 'next/navigation';

export default function Page() {
    const { user } = useUserAuth();
    const [lesson, setLesson] = useState({});
    const [text, setText] = useState("");
    const { lessonid } = useParams();
    const [levelList, setLevelList] = useState([]);
    const [allLessons, setAllLessons] = useState([]);

    // Typing logic states
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentDataKeyToType, setCurrentDataKeyToType] = useState("");
    const [textToRead, setTextToRead] = useState("");

    const [pastText, setPastText] = useState("");
    const [letterToType, setLetterToType] = useState("");
    const [futureText, setFutureText] = useState("");
    const [correctLetterStatus, setCorrectLetterStatus] = useState(true);
    const isTypingComplete = currentIndex >= text.length;
    const [wpm, setWpm] = useState(0);
    const [startTime, setStartTime] = useState(null);
    const [accuracy, setAccuracy] = useState(null);

    // Fetch levels and lessons when component mounts
    useEffect(() => {
        console.log(lessonid);
        dbGetAllLevelsByLessonId(lessonid, setLevelList);
    }, [lessonid]);

    // Fetch lessons for each level once levels are fetched
    useEffect(() => {
        if (levelList.length > 0) {
            const fetchLessonsForAllLevels = async () => {
                const lessons = await Promise.all(
                    levelList.map((level) =>
                        dbGetLessonById(lessonid, level.id, (lessonData) => lessonData)
                    )
                );
                setAllLessons(lessons);
                if (lessons[0] && lessons[0].textToType) {
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
        setWpm,
        startTime,
        setStartTime,
        isTypingComplete,
    });

    // Restart typing session
    const handleRestart = () => {
        setCurrentIndex(0);
        setPastText("");
        setLetterToType(text[0]);
        setFutureText(text.slice(1));
        setCorrectLetterStatus(true);
        setCurrentDataKeyToType(text[0]);
        setStartTime(null);
        setWpm(0);
        setAccuracy(null);
    };

    // Function to change the text when typing is complete
    useEffect(() => {
        if (isTypingComplete) {
            // Trigger when typing is complete
            console.log("Typing complete! Changing text...");
    
            // Check if there are more lessons to move to
            if (allLessons.length > 0) {
                // Find the index of the current lesson
                const currentLessonIndex = allLessons.findIndex((lesson) => lesson.textToType === text);
                
                if (currentLessonIndex >= 0 && currentLessonIndex < allLessons.length - 1) {
                    // Move to the next lesson (ensure we don't go out of bounds)
                    const nextLesson = allLessons[currentLessonIndex + 1];
                    
                    if (nextLesson && nextLesson.textToType) {
                        // Set the next lesson's text for typing
                        setText(nextLesson.textToType);
                        setTextToRead(nextLesson.textToRead);
                        setCurrentDataKeyToType(nextLesson.textToType[0]);
                        setLetterToType(nextLesson.textToType[0]);
                        setFutureText(nextLesson.textToType.slice(1));
        
                        // Reset currentIndex to start typing the new text
                        setCurrentIndex(0);
                        setPastText("");
                        setCorrectLetterStatus(true);
                        setStartTime(null);
                        setWpm(0);
                        setAccuracy(null);
                    }
                } else {
                    // Optionally, handle the case when all lessons are completed (e.g., show a "Completed" message)
                    console.log("All lessons completed!");
                }
            }
        }
    }, [isTypingComplete, allLessons, text]); // Dependency on text to track current lesson
    
    return (
        <main className="h-screen dark:bg-darkRed flex flex-col dark:text-lightestRed">
            <Header />
            {user ? (
                <div className="flex justify-center items-start mt-10 flex-row grow relative">
                    <div className="flex flex-col items-center">
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
                        <ProgressionBar />
                    </div>
                </div>
            ) : (
                <SignInCard title={"To view lesson please sign in"} type={true} />
            )}
        </main>
    );
}
