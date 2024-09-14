import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Options() {
  const [topic, setTopic] = useState('Data Structures & Algorithms');
  const [level, setLevel] = useState('Beginner');
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);
  const [useJobDescription, setUseJobDescription] = useState(false); // Toggle for job description
  const [jobDescription, setJobDescription] = useState(''); // Job description state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve the token from localStorage or another secure location
    const token = localStorage.getItem('token');

    try {
      const response = await axios.post(
        'http://127.0.0.1:3000/v1/exam/generate',
        {
          topic: useJobDescription ? null : topic, // Send null for topic if job description is provided
          level: useJobDescription ? null : level, // Send null for level if job description is provided
          numberOfQuestions,
          jobDescription: useJobDescription ? jobDescription : null, // Include job description if provided
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
      <form className="w-1/2 bg-gray-800 shadow-md rounded-lg p-8" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-gray-300 mb-6">Start Your Interview</h2>

        {/* Job Description Toggle */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-300">Use Job Description?</label>
          <div className="flex items-center">
            <input 
              type="checkbox" 
              className="mr-2" 
              checked={useJobDescription} 
              onChange={(e) => setUseJobDescription(e.target.checked)} 
            />
            <span className="text-gray-300">Yes</span>
          </div>
        </div>

        {/* Job Description Input */}
        {useJobDescription && (
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-300">Job Description</label>
            <textarea
              className="w-full p-2 border rounded  text-gray-300 bg-slate-950"
              rows="5"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Enter the job description..."
            ></textarea>
          </div>
        )}

        {/* Topic and Level Selection - Hide when using job description */}
        {!useJobDescription && (
          <>
            {/* Topic Selection */}
            <div className="mb-4">
              <label className="block mb-2 text-gray-300 font-semibold">Select Topic</label>
              <select 
                className="w-full p-2 border rounded text-gray-300 bg-slate-950" 
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
              <label className="block mb-2 font-semibold text-gray-300">Select Level</label>
              <select 
                className="w-full p-2 border rounded text-gray-300 bg-slate-950" 
                value={level} 
                onChange={(e) => setLevel(e.target.value)}
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </>
        )}

        {/* Number of Questions */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-300">Number of Questions</label>
          <input
            type="number" 
            min="5" 
            max="15" 
            className="w-full p-2 border rounded text-gray-300 bg-slate-950" 
            value={numberOfQuestions} 
            onChange={(e) => setNumberOfQuestions(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full p-2 bg-violet-400 text-grey-300 rounded">
          Start Interview
        </button>
      </form>
    </div>
  );
}

export default Options;
