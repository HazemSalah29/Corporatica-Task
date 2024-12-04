import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ImageView = ({ src, alt }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="p-4">
        <Image
          src={src}
          alt={alt}
          className="rounded-md shadow-md cursor-pointer"
          onClick={() => setIsModalOpen(true)}
          width={300}
          height={300}
        />
      </div>

      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            <motion.img
              src={src}
              alt={alt}
              className="max-w-full max-h-screen rounded-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
            <button
              className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ImageView;
