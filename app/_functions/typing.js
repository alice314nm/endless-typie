import { useEffect } from "react";

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
}) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (startTime === null) {
        setStartTime(Date.now());
      }

      if (event.key.toLowerCase() === text[currentIndex]?.toLowerCase()) {
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
      }
    };

    const intervalId = setInterval(() => {
      if (startTime && currentIndex > 0) {
        const timeInSeconds = (Date.now() - startTime) / 1000;
        const wordsTyped = currentIndex / 5; // 1 word = 5 characters
        const calculatedWpm = (wordsTyped / timeInSeconds) * 60;
        setWpm(calculatedWpm.toFixed(2));
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
  ]);
}