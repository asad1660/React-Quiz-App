import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, OnTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(OnTimeout, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, OnTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 10);
    });
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
}
