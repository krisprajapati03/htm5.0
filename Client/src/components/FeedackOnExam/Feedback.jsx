import { useLocation } from 'react-router-dom';

const Feedback = () => {
  const location = useLocation();
  const resultData = location.state?.feedback || {};

  // Destructure and validate the data safely
  const feedbackOfQuestions = Array.isArray(resultData?.questions) ? resultData.questions : [];
  const answers = Array.isArray(resultData?.answers) ? resultData.answers : [];
  const areaOfImprovement = Array.isArray(resultData?.area_of_improment) ? resultData.area_of_improment : [];


  // Create lookup maps for answers and areas of improvement
  const answerMap = answers.reduce((map, item) => {
    map[item.number] = item.answer || 'No answer provided';
    return map;
  }, {});

  const improvementMap = areaOfImprovement.reduce((map, item) => {
    map[item.number] = item.area_of_improvement || 'No improvement area provided';
    return map;
  }, {});

console.log(areaOfImprovement);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{resultData.name}</h1>

      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <p className="mt-4 text-lg font-semibold">Overall Feedback</p>
        <p>{resultData.result.overallFeedback || 'No feedback available'}</p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Detailed Feedback</h2>
        {feedbackOfQuestions.length > 0 ? feedbackOfQuestions.map((question) => (
          <div key={question.number} className="mb-6">
            <h3 className="font-semibold mb-2">
              Question {question.number}: {question.question || 'No question provided'}
            </h3>
            <p className="mb-2">
              <strong>Your Answer:</strong> {answerMap[question.number]}
            </p>
            <p className="text-gray-600">
              <strong>Suggested Improvement:</strong> {improvementMap[question.number]}
            </p>
          </div>
        )) : (
          <p>No detailed feedback available.</p>
        )}
      </div>
    </div>
  );
};

export default Feedback;
