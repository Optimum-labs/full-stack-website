"use client"
import React, { useState } from 'react';

const InterviewDashboard: React.FC = () => {
  const [interviews, setInterviews] = useState([
    { id: 1, title: 'Technical Round', score: 85 },
    { id: 2, title: 'Behavioral Round', score: 92 },
    { id: 3, title: 'Final Round', score: 78 },    
  ]);

  return (
    <div className="p-4">
      <div className="mb-4 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-center text-blue-800">Interview Dashboard</h2>
        <p className="text-gray-600">View your past interview sessions and scores.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {interviews.map((interview) => (
          <div key={interview.id} className="interviewItem bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold">{interview.title}</h3>
            <p className="text-gray-600">Score: {interview.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterviewDashboard;
