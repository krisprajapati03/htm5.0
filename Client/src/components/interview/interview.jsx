import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const ChatPage = () => {
  const location = useLocation(); // Access the current location
  const [questions, setQuestions] = useState([{
    question: '',
    answer: '' // Initialize answerFeed instead of answer
  }]);
  const navigate = useNavigate(); // Initialize navigate

  // Initialize questions state from location state
  useEffect(() => {
    if (location.state && location.state.questions) {
      setQuestions(location.state.questions.map(question => ({
        ...question,
        answer: '' // Ensure answerFeed is included and defaults to an empty string
      })));
    }
  }, [location.state]);

  // Handle input changes in the textarea
  const handleAnswerChange = (number, value) => {
    setQuestions(prevQuestions =>
      prevQuestions.map(q =>
        q.number === number ? { ...q, answer: value } : q
      )
    );
  };

  const handleSubmit = async () => {
    try {
      // Make the first request to generate feedback
      const response = await axios.post(
        'http://127.0.0.1:3000/v1/exam/genrateFeedback', 
        { data: questions }, 
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
  
      // Check if the feedback generation was successful
      if (response.status === 200) {
        console.log('Feedback Generated:', response.data); // Use JSON.stringify to see the full object
  
        // Make another request to store the feedback
        const feedbackResponse = await axios.post(
          'http://127.0.0.1:3000/v1/exam/store', 
          { data: response.data },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );
  
        // Check if storing feedback was successful
        if (feedbackResponse.status === 201) {
          console.log(feedbackResponse.data);
          navigate('/feedback', { state: { feedback: feedbackResponse.data } });
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
    <div className="flex justify-center bg-gray-950 min-h-screen items-start p-6">
      <div className="w-1/2 bg-gray-400 shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Answer Feed</h2>
        <div className="space-y-4">
          {questions.map(q => (
            <div key={q.number} className="border p-4 rounded-lg">
              <h3 className="font-semibold mb-2">{q.question}</h3>
              <div className="flex flex-col">
                <textarea
                  className="border rounded-lg p-2 w-full mb-2"
                  rows="3"
                  value={q.answer}
                  onChange={(e) => handleAnswerChange(q.number, e.target.value)}
                  placeholder="Write your answer here..."
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <button
            className="bg-gray-800 text-white rounded-lg px-4 py-2 w-full"
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
