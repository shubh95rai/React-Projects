import { useState } from "react";
import data from "./data";

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState(data);
  const [selectedOptions, setSelectedOptions] = useState(
    new Array(questions.length).fill(null),
  );
  const [showResult, setShowResult] = useState(false);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  function handleNext() {
    if (lock) {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setLock(false);
      } else {
        setShowResult(true);
      }

      if (
        selectedOptions[currentQuestion] ===
        questions[currentQuestion].correctAnswer
      ) {
        setScore(score + 1);
      }

      setShowCorrectAnswer(false);
    }
  }

  function handleSeletedOption(option) {
    if (!lock) {
      const updatedSelectedOptions = [...selectedOptions];

      updatedSelectedOptions[currentQuestion] = option;
      setSelectedOptions(updatedSelectedOptions);
      setLock(true);

      setShowCorrectAnswer(true);
    }
  }

  function handleReset() {
    setCurrentQuestion(0);
    setSelectedOptions(new Array(questions.length).fill(null));
    setShowResult(false);
    setScore(0);
    setLock(false);
  }

  return (
    <main className="flex h-screen items-start justify-center bg-gradient-to-b from-purple-700 to-purple-900 pt-20 font-inter text-neutral-900">
      <section className="flex w-[500px] flex-col gap-4 rounded bg-neutral-200 p-10">
        <h1 className="text-2xl font-semibold">Quiz App</h1>
        <div className="h-[1px] w-full rounded bg-neutral-900"></div>

        {!showResult ? (
          <div className="items-left flex flex-col gap-5">
            <h2 className="text- text-xl">
              {currentQuestion + 1}. {questions[currentQuestion].question}
            </h2>
            <div className="flex w-full  flex-col gap-2">
              {questions[currentQuestion].options.map((option, index) => {
                return (
                  <button
                    key={index}
                    className={`rounded border border-neutral-900 py-2 ${selectedOptions[currentQuestion] === option ? (selectedOptions[currentQuestion] === questions[currentQuestion].correctAnswer ? "border-green-900 bg-green-300 text-green-900" : "border-red-900 bg-red-300 text-red-900") : null} ${(showCorrectAnswer && questions[currentQuestion].correctAnswer) === option && "border-green-900 bg-green-300 text-green-900"}`}
                    onClick={() => {
                      handleSeletedOption(option);
                    }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <div className="flex flex-col items-center gap-2">
              <button
                type="button"
                className="rounded bg-gradient-to-b from-purple-700 to-purple-800 px-10 py-2.5 text-white"
                onClick={handleNext}
              >
                Next
              </button>
              <p className="text-sm text-neutral-700">
                {currentQuestion + 1} of {questions.length} questions
              </p>
            </div>
          </div>
        ) : (
          <div className="items-left flex flex-col items-center gap-5">
            <h1>
              Your score is {score} out of {questions.length}!
            </h1>
            <button
              type="button"
              className="rounded bg-gradient-to-b from-purple-700 to-purple-800 px-10 py-2.5 text-white"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default QuizApp;
