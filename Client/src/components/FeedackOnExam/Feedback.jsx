import React from 'react';

const Feedback = ({ resultData }) => {
  if (!resultData) {
    return <div>No feedback data available</div>;
  }

  const { name, questions, answers, area_of_improvement, result } = resultData;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{name}</h1>

      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Quiz Result</h2>
        <p className="mb-2">
          <strong>Total Marks:</strong> {result.totalMarks}
        </p>
        <p className="mb-2">
          <strong>Obtained Marks:</strong> {result.obtainedMarks}
        </p>
        <p className="mb-2">
          <strong>Percentage:</strong> {result.percentage}%
        </p>
        <p className={`mb-2 ${result.status === 'Fail' ? 'text-red-500' : 'text-green-500'}`}>
          <strong>Status:</strong> {result.status}
        </p>
        <p className="mt-4 text-lg font-semibold">Overall Feedback</p>
        <p>{result.overallFeedback}</p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Detailed Feedback</h2>
        {questions.map((question, index) => (
          <div key={question.number} className="mb-6">
            <h3 className="font-semibold mb-2">
              Question {question.number}: {question.question}
            </h3>
            <p className="mb-2">
              <strong>Your Answer:</strong>{' '}
              {answers[index]?.answer ? answers[index].answer : 'No answer provided'}
            </p>
            <p className="text-red-500 mb-2">
              <strong>Area of Improvement:</strong>{' '}
              {area_of_improvement[index]?.area_of_improvement}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
