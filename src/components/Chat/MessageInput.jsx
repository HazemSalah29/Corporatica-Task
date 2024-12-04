import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MessageInput = ({ onSend }) => {
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);

  const handleSend = () => {
    if (text || file) {
      onSend({ text, file });
      setText('');
      setFile(null);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  return (
    <motion.div
      className="p-4 bg-gray-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col space-y-4">
        {/* Preview Image */}
        {file && (
          <div className="relative w-32 h-32">
            <Image
              src={URL.createObjectURL(file)}
              alt="Preview"
              className="rounded-md shadow-md"
              width={200}
              height={200}
            />
            <button
              className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
              onClick={() => setFile(null)}
            >
              ✕
            </button>
          </div>
        )}

        <div className="flex items-center space-x-4">
          {/* File Upload */}
          <motion.label
            className="cursor-pointer bg-gray-600 px-4 py-2 rounded-md shadow-sm text-sm hover:bg-gray-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Upload Image
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </motion.label>

          {/* Text Input */}
          <input
            type="text"
            className="flex-1 p-2 rounded-md bg-gray-800 text-white border-none outline-none"
            placeholder="Type your message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          {/* Send Button */}
          <motion.button
            onClick={handleSend}
            className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Send
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default MessageInput;
