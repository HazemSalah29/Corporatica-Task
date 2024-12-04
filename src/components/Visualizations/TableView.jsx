import React from 'react';

const TableView = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto bg-gray-700 rounded-lg p-4 text-white">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="bg-gray-800">
            {columns.map((column, index) => (
              <th key={index} className="py-2 px-4">
                {column.Header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-600">
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="py-2 px-4">
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
