import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type QuestionCardProps = {
  question: string;
  options: string[];
  answer: string;
  correctExplanation: string;
  onSubmit: (isCorrect: boolean, selectedOption: string) => void;
  onNextQuestion: () => void; // New prop to handle going to the next question
  prevSelectedOption: string | null; // Previous selected option for this question
};

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  options,
  answer,
  correctExplanation,
  onSubmit,
  onNextQuestion,
  prevSelectedOption,
}) => {
  const [t] = useTranslation("global");
  const [selectedOption, setSelectedOption] = useState<string | null>(
    prevSelectedOption
  );
  const [isSubmitted, setIsSubmitted] = useState<boolean>(
    prevSelectedOption !== null
  );
  const [isCorrect, setIsCorrect] = useState<boolean>(
    prevSelectedOption === answer
  );

  // Reset state when a new question is rendered
  useEffect(() => {
    setSelectedOption(prevSelectedOption);
    setIsSubmitted(prevSelectedOption !== null);
    setIsCorrect(prevSelectedOption === answer);
  }, [question, prevSelectedOption, answer]);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      const correct = selectedOption === answer;
      setIsCorrect(correct);
      setIsSubmitted(true);
      onSubmit(correct, selectedOption);
    }
  };

  return (
    <div className="question-card">
      <h3>{question}</h3>
      <div className="options">
        {options.map((option, index) => (
          <label
            key={index}
            className={`option ${selectedOption === option ? "selected" : ""}`}
          >
            <input
              type="radio"
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
              disabled={isSubmitted}
            />
            {option}
          </label>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!selectedOption || isSubmitted}
          style={{
            backgroundColor: isSubmitted ? "#ccc" : "rgb(60, 110, 113)",
            marginRight: "10px",
          }}
        >
          {t("education.submit-btn")}
        </button>

        {/* Next Question button appears only after submission */}
        {isSubmitted && (
          <button
            type="button"
            onClick={onNextQuestion}
            style={{
              backgroundColor: "rgb(60, 110, 113)",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              marginLeft: "10px",
            }}
          >
            {t("education.next-btn")}
          </button>
        )}
      </div>

      {isSubmitted && (
        <div className={`feedback ${isCorrect ? "correct" : "incorrect"}`}>
          {isCorrect ? (
            <>
              <h3>{t("education.answer-correct")}</h3>
              <p>{correctExplanation}</p>
            </>
          ) : (
            <>
              <h3>{t("education.answer-incorrect")}</h3>
              <p>
                {t("education.card-1.quiz.q-1-pre-answer")} 
                <strong>{answer}</strong>. {correctExplanation}
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
};
