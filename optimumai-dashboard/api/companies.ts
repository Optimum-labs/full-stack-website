export const companies = [
  {
    name: "Google",
    questions: [
      {
        id: 1,
        title: "Software Engineer Interview Question",
        description:
          "Describe a time when you had to solve a difficult problem under tight deadlines.",
        difficulty: "Medium",
      },
      {
        id: 2,
        title: "Product Manager Interview Question",
        description:
          "How would you prioritize features for a new product launch?",
      },
      {
        id: 3,
        title: "UX Designer Interview Question",
        description: "What are your favorite UX design tools and why?",
      },
    ],
  },
  {
    name: "Meta",
    questions: [
      {
        id: 1,
        title: "Data Scientist Interview Question",
        description:
          "Explain the concept of A/B testing and how you would implement it to measure the effectiveness of a new feature.",
      },
      {
        id: 2,
        title: "Marketing Interview Question",
        description:
          "How would you design a marketing campaign to increase user engagement on a social media platform?",
      },
    ],
  },
  {
    name: "Microsoft",
    questions: [
      {
        id: 1,
        title: "Software Engineer Interview Question",
        description:
          "What is the difference between var, let, and const in JavaScript?",
      },
      {
        id: 2,
        title: "Data Analyst Interview Question",
        description:
          "How would you analyze a large dataset to identify trends and patterns?",
      },
    ],
  },
];


export const QuestionType = [
  {
    name: "Behavioral",
    link: "/interview/behavioral",
    questions: [
      {
        id: 1,
        question: "Tell me about a time when you had to resolve a conflict within a team.",
        answer: "In a previous project, there was a disagreement over the implementation approach. I facilitated a discussion, actively listened to each team member's perspective, and helped find a compromise that satisfied everyone."
      },
      // Add more behavioral questions here
    ],
  },

  {
    name: "Technical",
    link:"/interview/technical",
    questions: [
      {
        id: 1,
        question: "Explain the concept of object-oriented programming.",
        answer: "Object-oriented programming (OOP) is a programming paradigm based on the concept of 'objects,' which can contain data in the form of fields and code in the form of procedures. OOP allows for modularity, reusability, and extensibility in software development."
      },
      // Add more technical questions here
    ],
  },
];
