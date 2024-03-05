import React from "react";
// import { QuestionType } from "@/api/companies";
import InterviewChatbot from "../InterviewChatbot";

const Technical: React.FC = () => {
  return (
    <div className="py-4 px-4">
      <h2 className="text-2xl font-semibold mb-4">Technical Questions</h2>
      <div className="border border-gray-700 rounded-lg p-2">
        {/* {QuestionType.find((type) => type.name === "Technical")?.questions.map((question) => (
          <div key={question.id} className="mb-4">
            <h3 className="text-lg font-medium mb-2">{question.id}. {question.question}</h3>
            <p>{question.answer}</p>
          </div>
        ))} */}

        <InterviewChatbot />
      </div>
    </div>
  );
};

export default Technical;
