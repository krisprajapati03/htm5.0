import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-gray-400 text-center text-lg max-w-2xl mx-auto">
            Welcome to our AI-driven interview preparation platform! Our goal is to help you prepare for your dream job with tailored interview questions and instant feedback.
          </p>
        </div>

        {/* Our Mission Section */}
        <div className= " mt-16 grid grid-cols-1 text-center  gap-12">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        </div>
        <div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto text-center leading-relaxed">
              We aim to provide job seekers with the best possible tools to prepare for their interviews. Our platform leverages AI to simulate real interview environments and provides feedback to enhance your answers. Whether you are a beginner or an experienced professional, we have questions that fit your level and topic of choice.
            </p>
         
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-4 text-center">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Feature 1 */}
            <div className="bg-gray-800 p-6 rounded-lg text-center shadow-md hover:bg-gray-700 transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Tailored Questions</h3>
              <p className="text-gray-400">
                Practice interview questions that are personalized based on your job description and skill level, ensuring you're always prepared.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-800 p-6 rounded-lg text-center shadow-md hover:bg-gray-700 transition duration-300">
              <h3 className="text-xl font-semibold mb-4">AI Feedback</h3>
              <p className="text-gray-400">
                Get instant feedback on your answers, helping you improve and build confidence with each question.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-800 p-6 rounded-lg text-center shadow-md hover:bg-gray-700 transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Wide Range of Topics</h3>
              <p className="text-gray-400">
                From Data Structures to System Design, we cover all major technical and non-technical topics relevant to your field.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 grid grid-cols-1 text-center text-lg max-w-2xl mx-auto gap-12">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
            <p className="text-gray-300 leading-relaxed">
              We believe that interview preparation should be stress-free, accessible, and tailored to your needs. Our platform ensures you get the right questions, at the right difficulty level, and with instant AI feedback to help you improve.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-400">
              <li>Tailored interview simulations based on your job role</li>
              <li>Instant feedback powered by AI</li>
              <li>Wide range of topics from technical to non-technical</li>
              <li>Flexible practice at your own pace</li>
              <li>Comprehensive preparation for all experience levels</li>
            </ul>
          </div>
          {/* <div>
            <img src="https://source.unsplash.com/featured/?ai,technology" alt="AI Technology" className="rounded-lg shadow-md"/>
          </div> */}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-4">Get Started with Your Interview Prep Today!</h2>
          <p className="text-gray-400 mb-8">
            Join thousands of job seekers who have boosted their confidence and aced their interviews with our platform.
          </p>
          <a href="/selectoptions" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Start Preparing &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
