import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center  text-center ">
      <h1 className="text-9xl font-bold text-accent">404</h1>
      <h2 className="text-2xl font-semibold  mb-4">Oops! Page Not Found</h2>
      <p className="text-lg mb-8">
        The page you're looking for doesn't exist.
      </p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;