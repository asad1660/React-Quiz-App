import { useMemo } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswers = useMemo(() => {
    return [...answers].sort(() => Math.random() - 0.5);
  }, [answers]);
  return (
    <ul id="answers">
      {shuffledAnswers.map((answer) => {
        let isSelected = selectedAnswer === answer;
        let cssClasses = "";
        if (isSelected && answerState === "answered") {
          cssClasses = "selected";
        }
        if (
          isSelected &&
          (answerState === "correct" || answerState === "wrong")
        ) {
          cssClasses = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClasses}
              disabled={answerState != ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
