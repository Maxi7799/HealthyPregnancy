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
    question: "What is the most common method of childbirth?",
    options: [
      "A) Cesarean Section",
      "B) Assisted Vaginal Delivery",
      "C) Vaginal Birth",
      "D) Home Birth",
    ],
    answer: "C) Vaginal Birth",
    correctExplanation:
      "Vaginal birth is the most common delivery method for babies.",
  },
  {
    question: "What is a potential risk associated with cesarean sections?",
    options: [
      "A) Lower risk of infection",
      "B) Longer recovery time",
      "C) Less time in the hospital",
      "D) Easier breastfeeding",
    ],
    answer: "B) Longer recovery time",
    correctExplanation:
      "Women who undergo C-sections typically experience longer recovery times compared to those who have vaginal deliveries.",
  },
  {
    question: "What is one advantage of vaginal birth?",
    options: [
      "A) Longer recovery time",
      "B) Higher risk of infection",
      "C) Shorter recovery time",
      "D) Planned in advance",
    ],
    answer: "C) Shorter recovery time",
    correctExplanation:
      "Vaginal births generally allow for quicker recovery compared to C-sections.",
  },
  {
    question: "What is an assisted vaginal delivery?",
    options: [
      "A) A home birth",
      "B) Delivery with the use of tools like forceps or vacuum",
      "C) A planned C-section",
      "D) A natural birth without any intervention",
    ],
    answer: "B) Delivery with the use of tools like forceps or vacuum",
    correctExplanation:
      "Assisted vaginal delivery involves using instruments to help guide the baby out.",
  },
  {
    question: "Which factor can influence your choice of birth method?",
    options: [
      "A) Baby’s position",
      "B) Weather on the delivery day",
      "C) Color of the nursery",
      "D) Length of your pregnancy",
    ],
    answer: "A) Baby’s position",
    correctExplanation:
      "The baby’s position can significantly impact the recommended delivery method.",
  }
];

export const QuestionSlideshow3: React.FC = () => {
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
