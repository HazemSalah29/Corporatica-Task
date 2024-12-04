import React from 'react';
import ChatWindow from '../components/Chat/ChatWindow';

const Home = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-900">
      <div className="w-full max-w-4xl h-full flex flex-col bg-gray-800 rounded-lg shadow-lg">
        <ChatWindow />
      </div>
    </div>
  );
};

export default Home;
