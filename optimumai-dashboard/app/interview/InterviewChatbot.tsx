"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Backend_URL } from "@/lib/Constants";

const InterviewChatbot: React.FC = () => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(Backend_URL + "/interview-prep/generateQuestions",
      {
        headers: { 
          'Authorization': process.env.NEXT_PUBLIC_SUPABASE_AUTH
        }
      }
      );
      
      console.log(response);
      
      setQuestions(response.data);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = e.target.value;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    // Here you can submit the answers and handle the response, e.g., calculate score and display feedback
    setSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const renderQuestion = () => {
    const question = questions[currentQuestionIndex];
    return (
      <div className="p-4 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-semibold">{question}</h2>
        <input
          type="text"
          className="mt-2 border border-gray-300 rounded-md p-2 w-full"
          placeholder="Your answer..."
          value={answers[currentQuestionIndex] || ''}
          onChange={handleAnswerChange}
        />
        {currentQuestionIndex < questions.length - 1 ? (
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md" onClick={handleNextQuestion}>Next</button>
        ) : (
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md" onClick={handleSubmit}>Submit</button>
        )}
      </div>
    );
  };

  const renderFeedback = () => {

    return (
      <div className="p-4 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-semibold">Feedback</h2>
        <p className="mt-2">You have successfully submitted your answers. You will receive feedback shortly.</p>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4">
      {submitted ? renderFeedback() : renderQuestion()}
    </div>
  );
};

export default InterviewChatbot;
