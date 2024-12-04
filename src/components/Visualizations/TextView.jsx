import React from 'react';

const TextView = ({ content, downloadable, fileName }) => {
  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md">
      <div className="max-h-64 overflow-y-auto bg-gray-700 p-4 rounded-md text-gray-300">
        <p className="whitespace-pre-wrap">{content}</p>
      </div>
      {downloadable && (
        <div className="mt-4 text-right">
          <a
            href={`data:text/plain;charset=utf-8,${encodeURIComponent(
              content
            )}`}
            download={fileName || 'download.txt'}
            className="bg-blue-600 px-4 py-2 text-white text-sm font-medium rounded-md hover:bg-blue-500"
          >
            Download
          </a>
        </div>
      )}
    </div>
  );
};

export default TextView;
