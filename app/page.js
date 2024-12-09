'use client'

import { useEffect, useState } from "react";
import Header from "./_components/header";
import Keyboard from "./_components/keyboard";
import TextWindow from "./_components/text-window";
import useTypingLogic from "./_functions/typing";
import { dbAddStatWithKeyboard, dbAddStatWithoutKeyboard } from "./_services/user_stats_services";
import { useUserAuth } from "./_utils/auth-context";
import { dbGetRandomPracticeText } from "./_services/practice_services";

export default function Home() {
  const [text, setText] = useState("");
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(true);
  const { user } = useUserAuth();
  //current index of the letter to type
  const [currentIndex, setCurrentIndex] = useState(0);
  //current data letter to type
  const [currentDataKeyToType, setCurrentDataKeyToType] = useState(text[currentIndex])

  const [pastText, setPastText] = useState(text.slice(0,currentIndex));
  const [letterToType, setLetterToType] = useState(text[currentIndex]);
  const [futureText, setFutureText] = useState(text.slice(currentIndex+1,text.length));

  //If the typed letter by user is correct
  const [correctLetterStatus, setCorrectLetterStatus] = useState(true);

  //to restart process
  const isTypingComplete = currentIndex >= text.length;

  const [wpm, setWpm] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [accuracy, setAccuracy] = useState(100.00);

  useEffect(() => {
    (async () => {
      await dbGetRandomPracticeText(setText);
    })();
  }, []);

  useEffect(() => {
    setPastText(text.slice(0, currentIndex));
    setLetterToType(text[currentIndex] || '');
    setFutureText(text.slice(currentIndex + 1));
    setCurrentDataKeyToType(text[currentIndex] || '');
  }, [text, currentIndex]);

  const handleRestart = async () => {
    setCurrentIndex(0);
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    if (text.length > 0) {
      setPastText('');
      setLetterToType(text[0]);
      setFutureText(text.slice(1));
      setCurrentDataKeyToType(text[0]);
    }
    
    setCorrectLetterStatus(true);
    
    // Fetch new text after restarting
    await dbGetRandomPracticeText(setText);
  };

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
    setAccuracy,
  });

  const toggleKeyboardVisibility = () => {
    setIsKeyboardVisible((prev) => !prev);
  };



  useEffect(() => {
    if (isTypingComplete && user) {
      const userId = user.uid;
  
      if (isKeyboardVisible) {
        dbAddStatWithKeyboard(userId, wpm, accuracy);

      } else {
        dbAddStatWithoutKeyboard(userId, wpm, accuracy);
      }
    }
  }, [isTypingComplete, isKeyboardVisible, wpm, accuracy, user]);

  return (
    <main className="h-screen dark:bg-darkRed dark:text-lightestRed flex items-center flex-col">
      <Header />

         {/* Banner for completion */}
          {isTypingComplete && (
            <div className="fixed flex flex-col bg-lightestGreen dark:bg-red dark:border-lightestRed w-64 top-1/3 border-2 rounded-lg p-3 border-green">
              <h2 className="text-center text-lg">Well done!</h2>
              <div className="flex flex-row gap-10 items-end">
                <div>
                  <p>Your result:</p>
                  <p>Speed: {wpm}</p>
                  <p>Accuracy: {accuracy}%</p>
                </div>
                <div>
                  <button  onKeyDown={(e) => e.preventDefault()} className="flex flex-row gap-2 items-center" onClick={handleRestart}>
                    <p>Restart</p>
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-darkGreen dark:fill-lightestRed"
                        d="M5.23331,0.493645 C6.8801,-0.113331 8.6808,-0.161915 10.3579,0.355379 C11.5179,0.713177 12.5743,1.32796 13.4526,2.14597 L14.2929,1.30564 C14.9229,0.675676 16,1.12184 16,2.01275 L16,6.00002 L12.0127,6.00002 C11.1218,6.00002 10.6757,4.92288 11.3056,4.29291 L12.0372,3.56137 C11.389,2.97184 10.6156,2.52782 9.76845,2.26653 C8.5106,1.87856 7.16008,1.915 5.92498,2.37023 C4.68989,2.82547 3.63877,3.67423 2.93361,4.78573 C2.22844,5.89723 1.90836,7.20978 2.02268,8.52112 C2.13701,9.83246 2.6794,11.0698 3.56627,12.0425 C4.45315,13.0152 5.63528,13.6693 6.93052,13.9039 C8.22576,14.1385 9.56221,13.9407 10.7339,13.3409 C11.9057,12.7412 12.8476,11.7727 13.4147,10.5848 C13.6526,10.0864 14.2495,9.8752 14.748,10.1131 C15.2464,10.351 15.4575,10.948 15.2196,11.4464 C14.4635,13.0302 13.2076,14.3215 11.6453,15.1213 C10.0829,15.921 8.30101,16.1847 6.57402,15.8719 C4.84704,15.559 3.27086,14.687 2.08836,13.39 C0.905861,12.0931 0.182675,10.4433 0.0302394,8.69483 C-0.122195,6.94637 0.304581,5.1963 1.2448,3.7143 C2.18503,2.2323 3.58652,1.10062 5.23331,0.493645 Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}

      <div className="border-b-2 dark:border-b-red border-b-green w-[720px] flex flex-row items-center justify-between gap-4 pb-1 mb-2">
        <h2 className="text-lg">speed: {wpm} | accuracy: {accuracy}%</h2>

        <div className="flex flex-row gap-4">
          <div className="flex flex-row gap-2 items-center">
            <p>hide keyboard</p>
            <button
            className={`focus:outline-none bg-green dark:bg-red relative inline-flex items-center cursor-pointer w-11 h-5 rounded-full ${
              startTime
                ? "cursor-not-allowed"
                : ""
            }`}
            onClick={toggleKeyboardVisibility}
            onKeyDown={(e) => e.preventDefault()}
            disabled={startTime !== null}
          >
            <span
              className={`${
                isKeyboardVisible ? "translate-x-1" : "translate-x-6"
              } ${
                startTime ? "" : ""
              } dark:bg-lightestRed bg-white inline-block w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out`}
            ></span>
          </button>
          </div>
          <button  onKeyDown={(e) => e.preventDefault()} onClick={handleRestart} className="focus:outline-none flex flex-row gap-2 items-center">
            <p>restart</p>
            <svg
              width={18}
              height={18}
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-darkGreen dark:fill-lightestRed"
                d="M5.23331,0.493645 C6.8801,-0.113331 8.6808,-0.161915 10.3579,0.355379 C11.5179,0.713177 12.5743,1.32796 13.4526,2.14597 L14.2929,1.30564 C14.9229,0.675676 16,1.12184 16,2.01275 L16,6.00002 L12.0127,6.00002 C11.1218,6.00002 10.6757,4.92288 11.3056,4.29291 L12.0372,3.56137 C11.389,2.97184 10.6156,2.52782 9.76845,2.26653 C8.5106,1.87856 7.16008,1.915 5.92498,2.37023 C4.68989,2.82547 3.63877,3.67423 2.93361,4.78573 C2.22844,5.89723 1.90836,7.20978 2.02268,8.52112 C2.13701,9.83246 2.6794,11.0698 3.56627,12.0425 C4.45315,13.0152 5.63528,13.6693 6.93052,13.9039 C8.22576,14.1385 9.56221,13.9407 10.7339,13.3409 C11.9057,12.7412 12.8476,11.7727 13.4147,10.5848 C13.6526,10.0864 14.2495,9.8752 14.748,10.1131 C15.2464,10.351 15.4575,10.948 15.2196,11.4464 C14.4635,13.0302 13.2076,14.3215 11.6453,15.1213 C10.0829,15.921 8.30101,16.1847 6.57402,15.8719 C4.84704,15.559 3.27086,14.687 2.08836,13.39 C0.905861,12.0931 0.182675,10.4433 0.0302394,8.69483 C-0.122195,6.94637 0.304581,5.1963 1.2448,3.7143 C2.18503,2.2323 3.58652,1.10062 5.23331,0.493645 Z"
              />
            </svg>
          </button>
        </div>
      </div>

      {isKeyboardVisible && <Keyboard currentKeyToType={currentDataKeyToType}/>}
      <TextWindow pastText={pastText} letterToType={letterToType} futureText={futureText} correctLetter={correctLetterStatus}/>
    </main>
  );
}
