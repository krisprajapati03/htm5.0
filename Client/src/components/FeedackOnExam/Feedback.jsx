import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Feedback = () => {
  const { id } = useParams(); // Get the exam ID from the URL
  const [resultData, setResultData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchExamData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:3000/v1/exam/getexam/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setResultData(response.data);
        console.log('Fetched Exam Data:', response.data);
      } catch (e) {
        setError('Failed to fetch exam data.');
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchExamData();
  }, [id]);

  console.log('Result Data:', resultData);

  // Safely handle feedback data
  const feedbackOfQuestions = Array.isArray(resultData?.questions) ? resultData.questions : [];
  const answers = Array.isArray(resultData?.answers) ? resultData.answers : [];
  const areaOfImprovement = Array.isArray(resultData?.area_of_improvement) ? resultData.area_of_improvement : [];
  const result = resultData?.result || {};

  // Mapping answers and improvements
  const answerMap = answers.reduce((map, item) => {
    map[item.number] = item.answer;
    return map;
  }, {});

  // Use the correct field for area of improvement
  const improvementMap = areaOfImprovement.reduce((map, item) => {
    map[item.number] = item.area_of_improvement; // Correct field name
    return map;
  }, {});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="mx-auto p-6 bg-gray-900 text-white min-h-screen">
      <button
        onClick={() => window.location.href = '/'}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Back
      </button>
      <h1 className="text-3xl font-bold mb-4">{resultData.name || 'Interview Feedback'}</h1>

      <div className="bg-gray-800 shadow-md rounded-lg p-6 mb-6">
        <p className="mt-4 text-xl font-semibold">Overall Feedback</p>
        <p className="text-gray-300">{result.overallFeedback || 'No feedback available'}</p>
      </div>

      <div className="bg-gray-800 shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Detailed Feedback</h2>
        {feedbackOfQuestions.length > 0 ? feedbackOfQuestions.map((question) => (
          <div key={question.number} className="mb-6">
            <h3 className="font-semibold mb-2">
              <span className="text-yellow-300">Question {question.number}:</span> {question.question || 'No question provided'}
            </h3>
            <p className="mb-2">
              <strong>Your Answer:</strong> <span className="text-blue-400">{answerMap[question.number] || 'No answer provided'}</span>
            </p>
            <p className="text-gray-400">
              <strong>Suggested Improvement:</strong> <span className="text-orange-200">{improvementMap[question.number] || 'No improvement provided'}</span>
            </p>
          </div>
        )) : (
          <p className="text-gray-400">No detailed feedback available.</p>
        )}
      </div>
    </div>
  );
};

export default Feedback;
