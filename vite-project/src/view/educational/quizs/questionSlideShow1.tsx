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
    question:
      "When does gestational diabetes usually develop during pregnancy?",
    options: [
      "A) 12th week",
      "B) 24th week",
      "C) 30th week",
      "D) After childbirth",
    ],
    answer: "B) 24th week",
    correctExplanation:
      "Gestational diabetes typically appears around the 24th week of pregnancy.",
  },
  {
    question: "Why is hypertension called the 'silent killer'?",
    options: [
      "A) It causes sudden headaches",
      "B) It goes unnoticed until serious health issues arise",
      "C) It makes you feel sleepy",
      "D) It causes visible symptoms",
    ],
    answer: "B) It goes unnoticed until serious health issues arise",
    correctExplanation:
      "It often has no symptoms until it causes major problems like heart disease or stroke.",
  },
  {
    question: "Which lifestyle change can help manage hypertension?",
    options: [
      "A) Eating more processed foods",
      "B) Exercising regularly and eating heart-healthy foods",
      "C) Sleeping less",
      "D) Increasing salt intake",
    ],
    answer: "B) Exercising regularly and eating heart-healthy foods",
    correctExplanation:
      "Staying active and eating a balanced diet can help reduce blood pressure.",
  },
  {
    question: "What’s one of the main long-term risks of gestational diabetes?",
    options: [
      "A) Low birth weight",
      "B) Type 2 diabetes later in life",
      "C) Higher risk of migraines",
      "D) Postpartum depression",
    ],
    answer: "B) Type 2 diabetes later in life",
    correctExplanation:
      "Women with gestational diabetes have a higher chance of developing type 2 diabetes after pregnancy.",
  },
  {
    question:
      "Which of the following foods should you focus on to manage both conditions?",
    options: [
      "A) Sugary snacks",
      "B) Processed meat",
      "C) Whole grains and lean proteins",
      "D) Fried foods",
    ],
    answer: "C) Whole grains and lean proteins",
    correctExplanation:
      "These help manage blood sugar and promote heart health.",
  }
];

export const QuestionSlideshow1: React.FC = () => {
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
