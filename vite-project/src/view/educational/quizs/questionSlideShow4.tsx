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
    question: "Which nutrient is vital for preventing neural tube defects?",
    options: [
      "A) Calcium",
      "B) Iron",
      "C) Folic Acid",
      "D) Omega-3 Fatty Acids",
    ],
    answer: "C) Folic Acid",
    correctExplanation:
      "Folic acid is crucial for fetal development, particularly in the early stages of pregnancy.",
  },
  {
    question:
      "What should pregnant women limit in their diet to reduce the risk of foodborne illness?",
    options: [
      "A) Whole grains",
      "B) Raw or undercooked seafood, meat, and eggs",
      "C) Fruits and vegetables",
      "D) Dairy products",
    ],
    answer: "B) Raw or undercooked seafood, meat, and eggs",
    correctExplanation:
      "These foods can harbor harmful bacteria and should be avoided during pregnancy.",
  },
  {
    question: "What is a good source of calcium for pregnant women?",
    options: ["A) Chicken", "B) Spinach", "C) Cheese", "D) Brown rice"],
    answer: "C) Cheese",
    correctExplanation:
      "Dairy products, including cheese, are excellent sources of calcium essential for bone development.",
  },
  {
    question:
      "Which type of fish should pregnant women avoid due to high mercury levels?",
    options: ["A) Salmon", "B) Sardines", "C) Swordfish", "D) Trout"],
    answer: "C) Swordfish",
    correctExplanation:
      "Swordfish and other high-mercury fish should be avoided during pregnancy.",
  },
  {
    question:
      "What is the recommended daily limit for caffeine intake during pregnancy?",
    options: ["A) 100 mg", "B) 200 mg", "C) 300 mg", "D) 400 mg"],
    answer: "B) 200 mg",
    correctExplanation:
      "Pregnant women should limit caffeine intake to less than 200 mg per day to ensure safety for the baby.",
  },
];

export const QuestionSlideshow4: React.FC = () => {
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
