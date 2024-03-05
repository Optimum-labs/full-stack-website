import React, { useState } from 'react';
import '../assets/css/MockInterviewBot.css';

const questions = [
  "Tell me about yourself.",
  "What are your strengths?",
  "Can you describe a challenging project you've worked on?",
  // Add more questions as needed
];

function MockInterviewBot() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [botResponse, setBotResponse] = useState('');

  const handleAnswerChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer('');
      setBotResponse('');
    }
  };

  const handleSubmitAnswer = () => {
    setBotResponse(`You said: ${userAnswer}`);
  };

  return (
    <div className="mock-interview-bot-container">
      <h2>Welcome to Mock Interview Bot</h2>
      <p>Prepare for your interviews with our AI-powered Mock Interview Bot. Practice answering common industry-level questions and receive instant feedback.</p>

      <div className="question-container">
        <h3>Question {currentQuestionIndex + 1}:</h3>
        <p>{questions[currentQuestionIndex]}</p>
      </div>

      <div className="answer-container">
        <textarea
          placeholder="Your answer..."
          value={userAnswer}
          onChange={handleAnswerChange}
        ></textarea>
      </div>

      <div className="button-container">
        <button onClick={handleNextQuestion}>Next Question</button>
        <button onClick={handleSubmitAnswer}>Submit Answer</button>
      </div>

      {botResponse && (
        <div className="bot-response-container">
          <h3>Bot Response:</h3>
          <p>{botResponse}</p>
        </div>
      )}
    </div>
  );
}

export default MockInterviewBot;
