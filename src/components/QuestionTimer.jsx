import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, OnTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("time in");
    const timer = setTimeout(OnTimeout, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, OnTimeout]);

  useEffect(() => {
    console.log("time out");
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 100);
    });
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
