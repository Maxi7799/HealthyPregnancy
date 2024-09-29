import React, { useState } from "react";
import { QuestionCard } from "./questionCard";
import "./question.css";

type Question = {
  question: string;
  options: string[];
  answer: string;
  correctExplanation: string;
};

type Result = {
  selectedOption: string | null;
  isCorrect: boolean | null;
};

const questions: Question[] = [
  {
    question: "Why are antenatal visits important?",
    options: [
      "A) To monitor the baby’s growth and mother’s health",
      "B) To chat with your doctor",
      "C) Only for blood pressure checks",
      "D) To receive free samples",
    ],
    answer: "A) To monitor the baby’s growth and mother’s health",
    correctExplanation:
      "Antenatal visits track both your health and your baby’s development, ensuring a healthy pregnancy journey.",
  },
  {
    question: "When should you schedule your first antenatal visit?",
    options: [
      "A) After the first trimester",
      "B) As soon as you confirm your pregnancy",
      "C) Just before delivery",
      "D) After 20 weeks",
    ],
    answer: "B) As soon as you confirm your pregnancy",
    correctExplanation:
      "It's important to start antenatal care early to create a care plan and monitor your pregnancy from the beginning.",
  },
  {
    question: "Which of the following is checked during an antenatal visit?",
    options: [
      "A) Blood pressure",
      "B) Ultrasound scans",
      "C) Urine tests",
      "D) All of the above",
    ],
    answer: "D) All of the above",
    correctExplanation:
      "Antenatal visits involve various health checks to track both your well-being and your baby's development.",
  },
  {
    question: "Why is it important to monitor blood pressure during pregnancy?",
    options: [
      "A) To check for signs of hypertension",
      "B) To measure hydration levels",
      "C) To track salt intake",
      "D) It’s not necessary",
    ],
    answer: "A) To check for signs of hypertension",
    correctExplanation:
      "Monitoring blood pressure helps detect early signs of hypertension, which can affect both mother and baby.",
  },
];

export const QuestionSlideshow2: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [results, setResults] = useState<Result[]>(
    Array(questions.length).fill({ selectedOption: null, isCorrect: null })
  );

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleSubmitAnswer = (isCorrect: boolean, selectedOption: string) => {
    setResults((prevResults) =>
      prevResults.map((result, index) =>
        index === currentQuestionIndex ? { selectedOption, isCorrect } : result
      )
    );
  };

  const handleQuestionClick = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  return (
    <div className="slideshow-container">
      <div className="question-sidebar">
        <ul>
          {questions.map((_, index) => (
            <li
              key={index}
              className={`sidebar-item ${
                results[index].isCorrect === null
                  ? ""
                  : results[index].isCorrect
                  ? "correct"
                  : "incorrect"
              }`}
              onClick={() => handleQuestionClick(index)}
            >
              Question {index + 1}
            </li>
          ))}
        </ul>
      </div>

      <div className="question-card-container">
        <QuestionCard
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          answer={questions[currentQuestionIndex].answer}
          correctExplanation={
            questions[currentQuestionIndex].correctExplanation
          }
          onSubmit={handleSubmitAnswer}
          onNextQuestion={handleNextQuestion}
          prevSelectedOption={results[currentQuestionIndex].selectedOption}
        />
      </div>
    </div>
  );
};
