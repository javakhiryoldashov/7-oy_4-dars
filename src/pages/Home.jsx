import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Home Page</h1>
      <div className="flex justify-center my-20">
        <img
          src="/img/home.jpg"
          alt="Home Image"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
