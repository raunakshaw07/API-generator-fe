/* eslint-disable react/prop-types */

import { useState } from "react";

const Json = ({ data }) => {
  const dataCount = 5;
  const [showAll, setShowAll] = useState(false);

  const jsonData = showAll ? JSON.stringify(data, null, 2) : JSON.stringify(data.slice(0, dataCount), null, 2);

  const generateLineNumbers = () => {
    const lines = jsonData.split('\n');
    return lines.map((_, index) => <span key={index + 1}>{index + 1}<br /></span>);
  };

  return (
    <div className="lg:w-[50rem] w-full mt-8">
      <p>Total records: { data.length }</p>
      <div className="p-4 bg-white border border-gray-300 rounded shadow-md relative">
        <div className="flex">
          <div className="w-10 mr-4 text-gray-500 border-r">
            <pre className="overflow-x-auto whitespace-pre-wrap">{generateLineNumbers()}</pre>
          </div>
          <pre className="overflow-x-auto whitespace-pre-wrap flex-1">{jsonData}</pre>
        </div>
        <button
          className="text-sm text-blue-500 focus:outline-none absolute top-5 right-5"
          onClick={() => setShowAll(!showAll)}
        >
          {!showAll ? 'Show All' : 'Show Less'}
        </button>
      </div>
    </div>
  );
};

export default Json;
