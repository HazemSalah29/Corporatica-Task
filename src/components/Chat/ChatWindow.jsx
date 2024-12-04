import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatWindow = () => {
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

      {/* Message Input */}
      <MessageInput onSend={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
