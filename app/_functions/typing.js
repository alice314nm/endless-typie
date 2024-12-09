'use client'

import { useEffect, useState } from "react";

export default function useTypingLogic({
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
}) {
  const [correctKeystrokes, setCorrectKeystrokes] = useState(0);
  const [totalKeystrokes, setTotalKeystrokes] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Shift") {
        return;
      }

      if (startTime === null) {
        setStartTime(Date.now());
      }

      if (event.key === text[currentIndex]) {
        setCorrectKeystrokes((prev) => prev + 1);
        
        setTotalKeystrokes((prev) => prev + 1);

        const newIndex = currentIndex + 1;
        setCurrentDataKeyToType(text[newIndex]);

        if (newIndex < text.length) {
          setPastText(text.slice(0, newIndex));
          setLetterToType(text[newIndex]);
          setFutureText(text.slice(newIndex + 1));
        }

        setCurrentIndex(newIndex);
        setCorrectLetterStatus(true);
      } else {
        setCorrectLetterStatus(false);
        setTotalKeystrokes((prev) => prev + 1);

      }

      if (totalKeystrokes > 0 && setAccuracy) {
        const accuracy = (correctKeystrokes / totalKeystrokes) * 100;
        setAccuracy(accuracy.toFixed(2));
      }
    };

    const intervalId = setInterval(() => {
      if (startTime && currentIndex > 0) {
        const timeInSeconds = (Date.now() - startTime) / 1000;
        const wordsTyped = text.slice(0, currentIndex).split(/\s+/).length;
        const calculatedWpm = (wordsTyped / timeInSeconds) * 60;
        
        if (setWpm) {
          setWpm(calculatedWpm.toFixed(2));
        }
      }
    }, 100);

    if (isTypingComplete) {
      clearInterval(intervalId);
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(intervalId);
    };
  }, [
    currentIndex,
    text,
    setCurrentIndex,
    setPastText,
    setLetterToType,
    setFutureText,
    setCurrentDataKeyToType,
    setCorrectLetterStatus,
    setWpm,
    startTime,
    setStartTime,
    isTypingComplete,
    setAccuracy,
    correctKeystrokes,
    totalKeystrokes,
  ]);

  return null;
}
