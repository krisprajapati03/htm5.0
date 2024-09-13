import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-6xl font-bold mb-4">404 🥺</h1>
      <p className="text-2xl mb-6">Page Not Found</p>
      <p className="text-lg mb-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg px-6 py-3 transition-colors duration-300"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default Error;
