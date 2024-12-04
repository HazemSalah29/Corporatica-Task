import React from 'react';
import { motion } from 'framer-motion';
import TableView from '../Visualizations/TableView';
import Image from 'next/image';

const MessageList = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900">
      {messages.map((message, index) => (
        <motion.div
          key={index}
          className="p-3 rounded-lg bg-gray-700 text-white flex flex-col space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Display text if present */}
          {message.text && <p>{message.text}</p>}

          {/* Display image if present */}
          {message.file && (
            <Image
              src={URL.createObjectURL(message.file)}
              alt="Uploaded"
              className="w-48 h-auto rounded-md shadow-md"
              width={200}
              height={200}
            />
          )}

          {/* Display table if present */}
          {message.table && (
            <TableView
              columns={message.table.columns}
              data={message.table.data}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default MessageList;
