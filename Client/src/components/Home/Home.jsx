import React from 'react';

function Home() {
  return (
    <div className='bg-gray-950 w-full'>
      <section className='flex-grow h-screen  hero-section flex justify-between items-center p-8'>
        <div className='photo-section'>
          <img src='your-photo-url.jpg' alt='Hero' className='w-1/2 h-auto' />
          <div className='text-bold mt-4'>
            <h1 className='text-4xl font-bold'>Welcome to Our Service</h1>
            <div className='buttons mt-4'>
              <button className='bg-blue-500 text-white px-4 py-2 mr-2'>Button 1</button>
              <button className='bg-green-500 text-white px-4 py-2'>Button 2</button>
            </div>
          </div>
        </div>
      </section>
      <section className='how-it-works-section p-8'>
        <h2 className='text-3xl font-bold mb-4'>How It Works</h2>
        <div className='steps flex justify-between'>
          <div className='step bg-white p-4 rounded shadow-md'>
            <h3 className='text-xl font-bold'>1. Upload Your CV</h3>
          </div>
          <div className='step bg-white p-4 rounded shadow-md'>
            <h3 className='text-xl font-bold'>2. Information</h3>
          </div>
          <div className='step bg-white p-4 rounded shadow-md'>
            <h3 className='text-xl font-bold'>3. Practice</h3>
          </div>
          <div className='step bg-white p-4 rounded shadow-md'>
            <h3 className='text-xl font-bold'>4. Data</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
