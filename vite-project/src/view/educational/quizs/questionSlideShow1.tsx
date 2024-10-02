import React, { useState } from "react";
import { QuestionCard } from "./questionCard";
import "./question.css";
import { useTranslation } from "react-i18next";

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

const generateQuestions = () => {
  const [t] = useTranslation("global");
  const questions: Question[] = [
    {
      question: t("education.card-1.quiz.q-1-name"),
      options: [
        t("education.card-1.quiz.q-1-option-1"),
        t("education.card-1.quiz.q-1-option-2"),
        t("education.card-1.quiz.q-1-option-3"),
        t("education.card-1.quiz.q-1-option-4"),
      ],
      answer: t("education.card-1.quiz.q-1-answer"),
      correctExplanation: t("education.card-1.quiz.q-1-post-answer"),
    },
    {
      question: t("education.card-1.quiz.q-2-name"),
      options: [
        t("education.card-1.quiz.q-2-option-1"),
        t("education.card-1.quiz.q-2-option-2"),
        t("education.card-1.quiz.q-2-option-3"),
        t("education.card-1.quiz.q-2-option-4"),
      ],
      answer: t("education.card-1.quiz.q-2-answer"),
      correctExplanation: t("education.card-1.quiz.q-2-post-answer"),
    },
    {
      question: t("education.card-1.quiz.q-3-name"),
      options: [
        t("education.card-1.quiz.q-3-option-1"),
        t("education.card-1.quiz.q-3-option-2"),
        t("education.card-1.quiz.q-3-option-3"),
        t("education.card-1.quiz.q-3-option-4"),
      ],
      answer: t("education.card-1.quiz.q-3-answer"),
      correctExplanation: t("education.card-1.quiz.q-3-post-answer"),
    },
    {
      question: t("education.card-1.quiz.q-4-name"),
      options: [
        t("education.card-1.quiz.q-4-option-1"),
        t("education.card-1.quiz.q-4-option-2"),
        t("education.card-1.quiz.q-4-option-3"),
        t("education.card-1.quiz.q-4-option-4"),
      ],
      answer: t("education.card-1.quiz.q-4-answer"),
      correctExplanation: t("education.card-1.quiz.q-4-post-answer"),
    },
    {
      question: t("education.card-1.quiz.q-5-name"),
      options: [
        t("education.card-1.quiz.q-5-option-1"),
        t("education.card-1.quiz.q-5-option-2"),
        t("education.card-1.quiz.q-5-option-3"),
        t("education.card-1.quiz.q-5-option-4"),
      ],
      answer: t("education.card-1.quiz.q-5-answer"),
      correctExplanation: t("education.card-1.quiz.q-5-post-answer"),
    },
  ];
  return questions;
};

export const QuestionSlideshow1: React.FC = () => {
    const [t] = useTranslation("global");

  const questions = generateQuestions();
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
              {t("education.card-1.quiz.side")}{index + 1}
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
