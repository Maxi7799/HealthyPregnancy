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
    question: "Which exercise helps reconnect your core muscles postpartum?",
    options: ["A) Heel slides", "B) Jump squats", "C) Sit-ups", "D) Push-ups"],
    answer: "A) Heel slides",
    correctExplanation:
      "Heel slides are gentle movements that help reconnect and strengthen the core muscles after delivery.",
  },
  {
    question:
      "When is it typically safe to start gentle exercises like walking after a vaginal delivery?",
    options: [
      "A) Immediately",
      "B) After 2 weeks",
      "C) After 4-6 weeks, with doctor approval",
      "D) After 3 months",
    ],
    answer: "C) After 4-6 weeks, with doctor approval",
    correctExplanation:
      "After a vaginal delivery, it is generally safe to start gentle exercises like walking after 4-6 weeks, with approval from your doctor.",
  },
  {
    question:
      "What’s the best exercise to start with for rebuilding your core?",
    options: ["A) Sit-ups", "B) Heel slides", "C) Jumping jacks", "D) Running"],
    answer: "B) Heel slides",
    correctExplanation:
      "Heel slides are a gentle and effective exercise to begin rebuilding core strength postpartum.",
  },
  {
    question:
      "What should you do if you feel pain or notice increased bleeding during a workout?",
    options: [
      "A) Push through",
      "B) Slow down and consult your doctor",
      "C) Increase the intensity",
      "D) Drink more water",
    ],
    answer: "B) Slow down and consult your doctor",
    correctExplanation:
      "If you experience pain or increased bleeding during a workout, it's important to slow down and consult your doctor.",
  },
  {
    question:
      "Which exercise is best avoided during early postpartum recovery?",
    options: [
      "A) Pelvic tilts",
      "B) Planks",
      "C) Deep belly breathing",
      "D) Gentle walking",
    ],
    answer: "B) Planks",
    correctExplanation:
      "Planks should be avoided during early postpartum recovery as they put strain on the abdominal muscles that need time to heal.",
  }
];

export const QuestionSlideshow6: React.FC = () => {
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
