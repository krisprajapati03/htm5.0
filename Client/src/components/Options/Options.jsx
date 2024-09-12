import React, { useState } from 'react';

function Options() {
  const [topic, setTopic] = useState('Data Structures');
  const [level, setLevel] = useState('Beginner');
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass selected options to the parent component or backend
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="w-1/2 bg-white shadow-md rounded-lg p-8" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6">Start Your Interview</h2>
        
        {/* Topic Selection */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Select Topic</label>
          <select 
            className="w-full p-2 border rounded" 
            value={topic} 
            onChange={(e) => setTopic(e.target.value)}
          >
            <option value="Data Structures">Data Structures</option>
            <option value="Algorithms">Algorithms</option>
            <option value="System Design">System Design</option>
            <option value="Behavioral">Behavioral</option>
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
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Number of Questions</label>
          <input 
            type="number" 
            min="1" 
            max="20" 
            className="w-full p-2 border rounded" 
            value={numberOfQuestions} 
            onChange={(e) => setNumberOfQuestions(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Start Interview
        </button>
      </form>
    </div>
  );
}

export default Options;