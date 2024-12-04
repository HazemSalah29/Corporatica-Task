import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import TableView from '../Visualizations/TableView';

const ChatWindow = ({ columns, data }) => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div className="flex flex-col h-full w-full bg-gray-800">
      {/* Header */}
      <header className="p-4 text-center text-lg font-bold bg-gray-700 text-white">
        Chat Application
      </header>

      {/* Message List */}
      <MessageList messages={messages} />
      <div className="p-6 bg-gray-800 text-white">
        <h2 className="text-xl font-bold mb-4">Static Table</h2>
        <TableView columns={columns} data={data} />
      </div>

      {/* Message Input */}
      <MessageInput onSend={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
