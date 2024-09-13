import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ChatPage = () => {
  const location = useLocation();
  const [questions, setQuestions] = useState([
    {
      question: '',
      answer: '',
    },
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && Array.isArray(location.state.questions)) {
      setQuestions(
        location.state.questions.map((question) => ({
          ...question,
          answer: '',
        }))
      );
    } else {
      console.warn('Questions data is missing or not in correct format.');
    }
  }, [location.state]);

  const handleAnswerChange = (number, value) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.number === number ? { ...q, answer: value } : q
      )
    );
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:3000/v1/exam/genrateFeedback',
        { data: questions },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      if (response.status === 200) {
        console.log('Feedback Generated:', response.data);

        const feedbackResponse = await axios.post(
          'http://127.0.0.1:3000/v1/exam/store',
          { data: response.data },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );

        if (feedbackResponse.status === 201) {
          console.log(feedbackResponse.data);
          navigate(`/feedback/${feedbackResponse.data._id}`);
        } else {
          console.error('Failed to store feedback:', feedbackResponse);
          alert('Error storing feedback');
        }
      } else {
        console.error('Failed to generate feedback:', response);
        alert('Error generating feedback');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('An error occurred while submitting feedback');
    }
  };

  return (
    <div className="flex justify-center bg-gray-900 min-h-screen items-start p-8">
      <div className="w-full max-w-2xl bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Interview Section</h2>
        <div className="space-y-6">
          {questions.map((q) => (
            <div key={q.number} className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-violet-300 mb-2">
                {q.question}
              </h3>
              <textarea
                className="border border-gray-600 bg-gray-800 rounded-lg p-2 w-full text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 mb-2"
                rows="4"
                value={q.answer}
                onChange={(e) => handleAnswerChange(q.number, e.target.value)}
                placeholder="Write your answer here..."
              />
            </div>
          ))}
        </div>

        <div className="mt-6">
          <button
            className="bg-violet-400 hover:bg-violet-500 text-white font-semibold rounded-lg px-6 py-3 w-full transition-colors duration-300"
            onClick={handleSubmit}
          >
            Submit All Answers
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
