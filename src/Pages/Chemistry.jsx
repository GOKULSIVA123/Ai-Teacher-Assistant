import React, { useState } from "react";
import chemistryQuestions from "./chemistry.json";

function Chemistry() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [showResult, setShowResult] = useState(false);

  const questions = chemistryQuestions.questions;

  function handleAnswer(choice) {
    if (selectedAnswer !== null) return;

    const correctAnswer = questions[activeQuestion].correctAnswer;
    const isCorrect = choice === correctAnswer;

    setSelectedAnswer(choice);

    setResult((prev) => ({
      score: isCorrect ? prev.score + chemistryQuestions.perQuestionScore : prev.score,
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
      wrongAnswers: !isCorrect ? prev.wrongAnswers + 1 : prev.wrongAnswers,
    }));
  }

  function nextQuestion() {
    if (selectedAnswer === null) return;

    if (activeQuestion + 1 < questions.length) {
      setActiveQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-green-300 p-4">
      {!showResult ? (
        <div className="w-full max-w-xl bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">
            Chemistry Quiz ({activeQuestion + 1}/{questions.length})
          </h2>
          <p className="mb-6">{questions[activeQuestion].question}</p>
          <div className="flex flex-col gap-3">
            {questions[activeQuestion].choices.map((choice, index) => {
              const correctAnswer = questions[activeQuestion].correctAnswer;
              const isSelected = choice === selectedAnswer;
              const isCorrect = choice === correctAnswer;

              let bgColor = "bg-white";
              if (selectedAnswer !== null) {
                if (isSelected) {
                  bgColor = isCorrect ? "bg-green-400" : "bg-red-400";
                } else if (isCorrect) {
                  bgColor = "bg-green-300";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(choice)}
                  className={`${bgColor} border border-gray-400 rounded-md py-2 px-4 text-left`}
                  disabled={selectedAnswer !== null}
                >
                  {choice}
                </button>
              );
            })}
          </div>
          <button
            onClick={nextQuestion}
            className="mt-6 bg-black text-white px-6 py-2 rounded-md disabled:opacity-50"
            disabled={selectedAnswer === null}
          >
            {activeQuestion + 1 === questions.length ? "Finish" : "Next"}
          </button>
        </div>
      ) : (
        <div className="w-full max-w-xl bg-white rounded-lg p-6 shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-6">Quiz Result</h2>
          <p className="text-lg mb-2">Score: {result.score}</p>
          <p className="text-lg mb-2">Correct Answers: {result.correctAnswers}</p>
          <p className="text-lg mb-2">Wrong Answers: {result.wrongAnswers}</p>
          <p className="text-lg">Total Questions: {questions.length}</p>
        </div>
      )}
    </div>
  );
}

export default Chemistry;
