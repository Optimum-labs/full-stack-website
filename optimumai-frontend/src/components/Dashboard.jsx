import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const WelcomeCard = styled.div`
  background-color: #3498db;
  color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 20px;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }

  h2 {
    font-size: 24px;
  }
`;

const InfoCard = styled.div`
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  width: 90%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 8px;

      span {
        font-weight: bold;
      }
    }
  }
`;

const Dashboard = ({ user }) => {
  const [userData] = useState({
    credits: 100,
    courses: [
      { id: 1, title: "Web Development", completed: true },
      { id: 2, title: "Machine Learning Basics", completed: false },
    ],
    certificates: [
      { id: 1, title: "Web Development Certificate", course: "Web Development" },
    ],
    liveInterviews: [
      { id: 1, date: "2024-03-15", topic: "React.js Fundamentals" },
    ],
    payments: [
      { id: 1, date: "2024-01-10", amount: 50, description: "Web Development Course" },
    ],
  });

  useEffect(() => {
    // Fetch user data from the server and update state
    // Example API call:
    // fetchUserData(userId).then((data) => setUserData(data));
  }, []); // Run once on component mount

  return (
    <DashboardContainer className="text-dark dark:text-white"
    >
      <UserProfile>
        <img src="https://github.com/ajay-dhangar.png" alt="Profile" />
        <h2>Welcome, {user.email}!</h2>
      </UserProfile>

      <WelcomeCard>
        <p>Email: {user.email}</p>
        <p>Credits: {userData.credits}</p>
      </WelcomeCard>

      <InfoCard>
        <h3>Your Courses</h3>
        <ul>
          {userData.courses.map((course) => (
            <li key={course.id}>
              {course.completed ? (
                <span className="text-green-500">{course.title}</span>
              ) : (
                <span className="text-blue-500">{course.title}</span>
              )}
            </li>
          ))}
        </ul>
      </InfoCard>

      <InfoCard>
        <h3>Your Certificates</h3>
        <ul>
          {userData.certificates.map((certificate) => (
            <li key={certificate.id}>
              <span className="text-purple-500">{certificate.title}</span>
              <p>Course: {certificate.course}</p>
            </li>
          ))}
        </ul>
      </InfoCard>

      <InfoCard>
        <h3>Upcoming Live Interviews</h3>
        <ul>
          {userData.liveInterviews.map((interview) => (
            <li key={interview.id}>
              <span className="text-yellow-500">{interview.date}</span>
              <p>Topic: {interview.topic}</p>
            </li>
          ))}
        </ul>
      </InfoCard>

      <InfoCard>
        <h3>Payment History</h3>
        <ul>
          {userData.payments.map((payment) => (
            <li key={payment.id}>
              <span className="text-blue-500">{payment.date}</span>
              <p>Amount: ${payment.amount}</p>
              <p>Description: {payment.description}</p>
            </li>
          ))}
        </ul>
      </InfoCard>

      <div className="flex justify-end space-x-4">
        <Link to="/live-interview" className="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md transition duration-300">
          Schedule Live Interview
        </Link>
        <Link to="/purchase-courses" className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 rounded-md transition duration-300">
          Purchase Courses
        </Link>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
