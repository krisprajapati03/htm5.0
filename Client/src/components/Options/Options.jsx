import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Options() {
  const [topic, setTopic] = useState('Data Structures & Algorithms');
  const [level, setLevel] = useState('Beginner');
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve the token from localStorage or another secure location
    const token = localStorage.getItem('token');

    try {
      const response = await axios.post(
        'http://127.0.0.1:3000/v1/exam/generate',
        {
          topic,
          level,
          numberOfQuestions,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Handle the response data as needed
      const questions = response.data;
      console.log('Fetched Questions:', questions);

      // Redirect to the interview page and pass the fetched questions as state
      navigate('/interview', { state: { questions } });
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <form className="w-1/2 bg-gray-400 shadow-md rounded-lg p-8" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6">Start Your Interview</h2>
        {/* Topic Selection */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Select Topic</label>
          <select 
            className="w-full p-2 border rounded" 
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          >
            <option value="Data Structures & Algorithms">Data Structures & Algorithms</option>
            <option value="System Design">System Design</option>
            <option value="Object Oriented Programming">Object Oriented Programming</option>
            <option value="Database Management">Database Management</option>
            <option value="Operating Systems">Operating Systems</option>
            <option value="Networking">Networking</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Web Development">Web Development</option>
            <option value="Backend Development">Backend Development</option>
            <option value="Frontend Development">Frontend Development</option>
            <option value="Full Stack Development">Full Stack Development</option>
            <option value="DevOps">DevOps</option>
            <option value="Data Science">Data Science</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
          </select>
        </div>

           {/* Level Selection */}
           <div className="mb-4">
          <label className="block mb-2 font-semibold">Select Level</label>
          <select 
            className="w-full p-2 border rounded" 
            value={level} 
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        {/* Number of Questions */}
        <div className="mb-4" id='numberOfQuestions'>
          <label className="block mb-2 font-semibold">Number of Questions</label>
          <input
            type="number" 
            min="5" 
            max="15" 
            className="w-full p-2 border rounded" 
            value={numberOfQuestions} 
            onChange={(e) => setNumberOfQuestions(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" onClick={handleSubmit} className="w-full p-2 bg-gray-800 text-white rounded">
          Start Interview
        </button>
      </form>
    </div>
  );
}

export default Options;
