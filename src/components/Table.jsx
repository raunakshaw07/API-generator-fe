/* eslint-disable react/prop-types */

import { useState } from 'react';

const Table = ({ data }) => {
  const displayCount = 10;
  const [showAll, setShowAll] = useState(false);

  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  const columns = Object.keys(data[0]);

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <div className="lg:w-[50rem] w-full mt-8">
      <p>Total Records: { data.length }</p>
      <div className='w-full overflow-x-auto'>
        <table className="p-4 bg-white border border-gray-300 rounded w-full">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column} className='p-4 bg-gray-200 border-b border-gray-300'>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(0, showAll ? data.length : displayCount).map((item, index) => (
              <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                {columns.map((column) => (
                  <td key={column} className='px-4 py-2'>{item[column]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!showAll && data.length > displayCount && (
        <div className="mt-4 flex justify-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
