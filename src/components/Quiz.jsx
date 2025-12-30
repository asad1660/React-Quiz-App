import { useCallback, useRef, useState } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question.jsx";
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const quizComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prev) => {
      return [...prev, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }
  return (
    <div id="quiz">
      <Question
        index={activeQuestionIndex}
        key={activeQuestionIndex}
        onSkipAnswer={handleSkipAnswer}
        onHandleSelect={handleSelectAnswer}
      />
    </div>
  );
}
