import React from 'react';
import ChatWindow from '../components/Chat/ChatWindow';

const Home = () => {
  const tableColumns = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Age', accessor: 'age' },
    { Header: 'Occupation', accessor: 'occupation' },
  ];

  const tableData = [
    { name: 'John Doe', age: 28, occupation: 'Developer' },
    { name: 'Jane Smith', age: 32, occupation: 'Designer' },
    { name: 'Sam Wilson', age: 40, occupation: 'Manager' },
  ];
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-900">
      <div className="w-full max-w-4xl h-full flex flex-col bg-gray-800 rounded-lg shadow-lg">
        <ChatWindow columns={tableColumns} data={tableData} />
      </div>
    </div>
  );
};

export default Home;
