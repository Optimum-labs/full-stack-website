"use client";

import React, { useState } from 'react';
import axios from 'axios';

const ResumeReview: React.FC = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [feedback, setFeedback] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setResumeFile(file);
    }
  };

  const handleReview = async () => {
    if (!resumeFile) {
      alert('Please upload a resume file.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('resume', resumeFile);

      const response = await axios.post(
        'http://localhost:3001/interview-prep/uploadResume',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InJzYzN1bkp5cFdueW9YSk0iLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzA4NzEzMjcxLCJpYXQiOjE3MDg3MDk2NzEsImlzcyI6Imh0dHBzOi8vcWJxdW9paWFsZGVqcHpxaGljZWYuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6ImM4NTlmOWNjLThjODQtNDNjYi04YjE3LTExZjFhOTk0NTZlZSIsImVtYWlsIjoiYWpheWRoYW5nYXI0OUBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIiwiZ2l0aHViIl19LCJ1c2VyX21ldGFkYXRhIjp7ImF2YXRhcl91cmwiOiJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvOTkwMzc0OTQ_dj00IiwiZW1haWwiOiJhamF5ZGhhbmdhcjQ5QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmdWxsX25hbWUiOiJBamF5IERoYW5nYXIiLCJpc3MiOiJodHRwczovL2FwaS5naXRodWIuY29tIiwibmFtZSI6IkFqYXkgRGhhbmdhciIsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiQWpheS1EaGFuZ2FyIiwicHJvdmlkZXJfaWQiOiI5OTAzNzQ5NCIsInN1YiI6Ijk5MDM3NDk0IiwidXNlcl9uYW1lIjoiQWpheS1EaGFuZ2FyIn0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoib2F1dGgiLCJ0aW1lc3RhbXAiOjE3MDg3MDk2NzF9XSwic2Vzc2lvbl9pZCI6ImM3ZDY3ZDE5LWUzOTAtNDQ0ZC05ZmIwLTNmOWEwNzBkZDI1NSJ9.L7T_2De4sxoRXJTukeC2M5rDRLFfTIPtK5pWE3rR-vw'
          },
        }
      );

      // Assuming the backend returns feedback in the response
      setFeedback(response.data.feedback);
    } catch (error) {
      console.error('Error uploading resume:', error);
      alert('Error uploading resume. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <input
        type="file"
        accept=".pdf"
        className="hidden"
        onChange={handleFileChange}
        id="resume-upload"
      />
      <label
        htmlFor="resume-upload"
        className="cursor-pointer bg-blue-500 text-white rounded-md px-4 py-2 mb-4 shadow-md hover:bg-blue-600 transition duration-300"
      >
        Upload Resume PDF
      </label>
      {resumeFile && <p>Selected resume: {resumeFile.name}</p>}
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
        onClick={handleReview}
      >
        Review Resume
      </button>
      {feedback && <div className="mt-4">Feedback: {feedback}</div>}
    </div>
  );
};

export default ResumeReview;
