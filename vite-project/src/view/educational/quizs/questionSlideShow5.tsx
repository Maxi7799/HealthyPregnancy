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
    question: "Which of the following is a benefit of prenatal exercise?",
    options: [
      "A) Causes preterm labor",
      "B) Reduces back pain and improves mood",
      "C) Leads to dehydration",
      "D) Increases risk of complications",
    ],
    answer: "B) Reduces back pain and improves mood",
    correctExplanation:
      "Prenatal exercise helps reduce back pain, improves mood, and promotes overall well-being during pregnancy.",
  },
  {
    question:
      "Which trimester is it best to focus on gentle, seated exercises and stretching?",
    options: [
      "A) First trimester",
      "B) Second trimester",
      "C) Third trimester",
      "D) Postpartum",
    ],
    answer: "C) Third trimester",
    correctExplanation:
      "The third trimester is the ideal time to focus on gentle exercises and stretching to accommodate the body's changes.",
  },
  {
    question: "What is the best way to strengthen your pelvic floor muscles?",
    options: [
      "A) Jumping jacks",
      "B) Kegel exercises",
      "C) Crunches",
      "D) Heavy lifting",
    ],
    answer: "B) Kegel exercises",
    correctExplanation:
      "Kegel exercises are specifically designed to strengthen the pelvic floor muscles, which are important during pregnancy.",
  },
  {
    question:
      "What type of exercise should be avoided after the first trimester?",
    options: [
      "A) Walking",
      "B) Lying flat on your back",
      "C) Prenatal yoga",
      "D) Squats",
    ],
    answer: "B) Lying flat on your back",
    correctExplanation:
      "After the first trimester, lying flat on your back should be avoided as it can reduce blood flow to the baby.",
  },
  {
    question: "Which activity is safe for the first trimester?",
    options: [
      "A) High-intensity interval training",
      "B) Gentle yoga",
      "C) Long-distance running",
      "D) Heavy weightlifting",
    ],
    answer: "B) Gentle yoga",
    correctExplanation:
      "Gentle yoga is a safe and beneficial activity during the first trimester to improve flexibility and reduce stress.",
  },
];

export const QuestionSlideshow5: React.FC = () => {
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
