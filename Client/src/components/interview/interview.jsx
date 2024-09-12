import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'; // Axios for sending data to backend
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome for icons

const ChatPage = () => {
  const [questions, setQuestions] = useState([
    { id: 1, question: "What is React?", answerFeed: "" },
    { id: 2, question: "What is Tailwind CSS?", answerFeed: "" },
  ]);
  const [isListening, setIsListening] = useState(null); // Track which question is listening
  const [error, setError] = useState(''); // Handle any errors
  const recognitionRef = useRef(null); // Store the recognition instance in a ref

  // Initialize Speech Recognition if the browser supports it
  const initializeSpeechRecognition = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false; // Stop after each result
      recognition.interimResults = true; // Enable real-time transcription
      recognition.lang = 'en-US';

      // When speech recognition receives a result
      recognition.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }

        console.log('Transcript received: ', transcript); // Debugging the transcript

        // Use functional form of setQuestions to ensure state updates correctly
        setQuestions((prevQuestions) => {
          const updatedQuestions = prevQuestions.map((q) => {
            if (q.id === isListening) {
              console.log(`Updating question with id: ${q.id}, current answerFeed: ${q.answerFeed}, new transcript: ${transcript}`);
              return { ...q, answerFeed: q.answerFeed + transcript }; // Append the transcript
            }
            return q;
          });

          console.log('Updated questions:', updatedQuestions); // Debugging updated state
          return updatedQuestions;
        });
      };

      // Handle errors during speech recognition
      recognition.onerror = (event) => {
        setError(`Error: ${event.error}`);
        setIsListening(null);
      };

      // When recognition ends, reset listening state
      recognition.onend = () => {
        console.log('Recognition ended');
        setIsListening(null);
      };

      recognitionRef.current = recognition; // Store recognition instance in ref
    } else {
      setError('Speech Recognition is not supported in this browser.');
    }
  };

  console.log('Questions:', questions); // Debugging the questions state

  useEffect(() => {
    initializeSpeechRecognition();
  }, []);

  // Start or stop listening for speech input
  const toggleListening = (id) => {
    if (recognitionRef.current) {
      if (isListening === id) {
        recognitionRef.current.stop(); // Stop recognition if already listening
        setIsListening(null);
        console.log(`Stopped listening for question id: ${id}`);
      } else {
        setError(''); // Clear any previous errors
        recognitionRef.current.start(); // Start recognition if not listening
        console.log(`Started listening for question id: ${id}`);
        setIsListening(id); // Set the question id for which the speech recognition is active
      }
    }
  };

  // Handle submitting all answers to the backend
  const submitAllAnswers = async () => {
    const answeredQuestions = questions.filter((q) => q.answerFeed.trim() !== '');

    if (answeredQuestions.length === 0) return;

    try {
      await axios.post('/api/answer', { answers: answeredQuestions });
      alert('Answers submitted successfully');
    } catch (error) {
      console.error('Error submitting answers to backend:', error);
      alert('Error submitting answers');
    }
  };

  return (
    <div className="flex justify-center bg-gray-950 min-h-screen items-start p-6">
      {/* Answer Feed Section */}
      <div className="w-1/2 bg-gray-400 shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Answer Feed</h2>
        <div className="space-y-4">
          {questions.map((q) => (
            <div key={q.id} className="border p-4 rounded-lg">
              <h3 className="font-semibold mb-2">{q.question}</h3>
              <div className="flex items-center space-x-2">
                <textarea
                  className="border rounded-lg p-2 w-full mb-2"
                  rows="3"
                  value={q.answerFeed} // Should reflect the updated state
                  onChange={(e) =>
                    setQuestions((prevQuestions) =>
                      prevQuestions.map((ques) =>
                        ques.id === q.id
                          ? { ...ques, answerFeed: e.target.value }
                          : ques
                      )
                    )
                  }
                  placeholder="Write your answer or use the mic..."
                />
                <button
                  className={`${
                    isListening === q.id ? 'bg-red-500' : 'bg-green-500'
                  } text-white rounded-lg p-2`}
                  onClick={() => toggleListening(q.id)}
                >
                  <i className="fas fa-microphone"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <button
            className="bg-gray-800 text-white rounded-lg px-4 py-2 w-full"
            onClick={submitAllAnswers}
          >
            Submit All Answers
          </button>
        </div>

        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default ChatPage;
