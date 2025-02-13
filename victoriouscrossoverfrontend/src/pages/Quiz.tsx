import React, { useState } from 'react';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const Quiz: React.FC = () => {
  const questions: Question[] = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: [
        "Harper Lee",
        "Mark Twain",
        "F. Scott Fitzgerald",
        "Ernest Hemingway",
      ],
      correctAnswer: "Harper Lee",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowScore(false);
  };

  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        {showScore ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">
              Quiz Completed!
            </h1>
            <p className="text-lg text-gray-700 mt-4">
              Your score: {score} / {questions.length}
            </p>
            <button
              onClick={handleRestart}
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div>
            <h1 className="text-xl font-semibold text-gray-800 mb-4">
              Question {currentQuestion + 1} of {questions.length}
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              {questions[currentQuestion].question}
            </p>
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className={`w-full px-4 py-2 text-left border rounded-lg ${
                    selectedOption === option
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="flex justify-end mt-6">
              <button
                onClick={handleNext}
                disabled={!selectedOption}
                className={`px-4 py-2 text-white rounded-lg ${
                  selectedOption
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-gray-400 cursor-not-allowed"
                } transition duration-200`}
              >
                {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
