'use client';

import React, { useEffect, useState } from 'react';
import Header from '../_components/header';
import Keyboard from '../_components/keyboard';
import ProgressionBar from '../_components/progression-bar';
import TextWindow from '../_components/text-window';
import { useUserAuth } from '../_utils/auth-context';
import SignInCard from '../_components/signin-card';
import { dbGetLessonById } from '../_services/lessons_services';
import useTypingLogic from '../_functions/typing';
import { useParams } from 'next/navigation';

export default function Page() {
    const { user } = useUserAuth();
    const [lesson, setLesson] = useState({});
    const [text, setText] = useState("");
    const { lessonid } = useParams();

    // Typing logic states
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentDataKeyToType, setCurrentDataKeyToType] = useState("");
    const [pastText, setPastText] = useState("");
    const [letterToType, setLetterToType] = useState("");
    const [futureText, setFutureText] = useState("");
    const [correctLetterStatus, setCorrectLetterStatus] = useState(true);
    const isTypingComplete = currentIndex >= text.length;
    const [wpm, setWpm] = useState(0);
    const [startTime, setStartTime] = useState(null);
    const [accuracy, setAccuracy] = useState(null);

    // Fetch the lesson when the component mounts
    useEffect(() => {
        console.log(lessonid); 
        dbGetLessonById(lessonid, "level1", setLesson);
    }, [lessonid]);

    // Update text when lesson changes
    useEffect(() => {
        if (lesson.textToType) {
            setText(lesson.textToType);
            setCurrentDataKeyToType(lesson.textToType[0]); // Initialize current key
            setLetterToType(lesson.textToType[0]);
            setFutureText(lesson.textToType.slice(1));
        }
    }, [lesson]);

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

    return (
        <main className="h-screen dark:bg-darkRed flex flex-col dark:text-lightestRed">
            <Header />
            {user ? (
                <div className="flex justify-center items-start mt-10 flex-row grow relative">
                    <div className="flex flex-col items-center">
                        <Keyboard currentKeyToType={currentDataKeyToType} />
                        <TextWindow
                            textToRead={lesson.textToRead}
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
