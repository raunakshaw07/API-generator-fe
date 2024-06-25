import './App.css';

import Info from './components/Info';
import Json from './components/Json';
import Table from './components/Table';
import axios from 'axios';
import { backendRoute } from './routes';
import { useState } from 'react';

function App() {
  const [sheets, setSheets] = useState([]);
  const [selectedSheetName, setSelectedSheetName] = useState(null);
  const [spreadsheetId, setSpreadsheetId] = useState(null);
  const [data, setData] = useState(null);
  const [active, setActive] = useState('json');
  const [error, setError] = useState(null);

  const debounce = (func, delay) => {
    let timerId;
    return function (...args) {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        func.apply(this, args);
        timerId = null;
      }, delay);
    };
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value.trim().length > 0) {
      debouncedSetSheetId(value);
    } else {
      setError(null);
      setSpreadsheetId(null);
      setSheets([]);
      setData(null);
    }
  };

  const debouncedSetSheetId = debounce(async (value) => {
    try {
      const response = await axios.post(backendRoute, {
        spreadsheetUrl: value,
      });
      if (response.status === 200) {
        setSpreadsheetId(response.data.id);
        setSheets(response.data.sheets);
        setError(null);
      } else {
        setError(response.data.error);
        setSpreadsheetId(null);
        setSheets([]);
        setData(null);
      }
    } catch (err) {
      setError(JSON.stringify(err.response.data.error));
      setSpreadsheetId(null);
      setSheets([]);
      setData(null);
    }
  }, 500);

  const sheetSelectionChange = async (e) => {
    const value = e.target.value;
    const sheetName = value.substring(0, value.indexOf(' ')).trim();
    const sheetId = value.substring(value.indexOf(' ')).trim();

    try {
      const response = await axios.post(
        `${backendRoute}/fetch-sheet`,
        { spreadsheetId: spreadsheetId, sheetName, sheetId }
      );
      if (response.status === 200) {
        setSelectedSheetName(sheetName);
        setData(response.data);
        setError(null);
      } else {
        setSelectedSheetName(null);
        setError(response.data.error);
        setData(null);
      }
    } catch (err) {
      setError('Failed to fetch sheet data. Please try again.');
      setData(null);
    }
  }

  return (
    <div>
      <div className='bg-gray-800 p-4 text-white flex justify-center items-center drop-shadow-lg fixed w-full z-10'>
        <p className='text-3xl font-bold'>CONNECT SPREADSHEET</p>
      </div>
      <div className='container mx-auto py-8 px-4 flex flex-col items-center'>
        <Info />

        <div className='mt-8 bg-white p-4 lg:w-[50rem] w-full'>
          <p>Enter spreadsheet url:</p>
          <input
            type='text'
            className='p-2 border border-gray-200 rounded w-full focus:border-blue-400 outline-none'
            onChange={handleInputChange}
          />

          {error && (
            <div className='bg-red-200/25 text-red-500 border border-red-200 rounded p-4 mt-4'>
              {error}
            </div>
          )}

          {sheets.length > 0 && (
            <div className='mt-4'>
              <p>Select a sheet:</p>
              <select
                className='p-2 border border-gray-200 rounded w-full focus:border-blue-400 outline-none'
                onChange={sheetSelectionChange}
              >
                <option value=''>Select...</option>
                {sheets.map((sheet) => (
                  <option
                    key={sheet.properties.sheetId}
                    value={sheet.properties.title + ' ' + sheet.properties.sheetId}
                  >
                    {sheet.properties.title}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {data ? (
          <div>
            <div className='mt-8 lg:w-[50rem] w-full flex gap-2 justify-end'>
              <button
                className={`bg-white p-2 border ${
                  active === 'json' ? 'border-gray-500' : 'border-gray-300'
                } rounded`}
                onClick={() => setActive('json')}
              >
                JSON
              </button>
              <button
                className={`bg-white p-2 border ${
                  active === 'table' ? 'border-gray-500' : 'border-gray-300'
                } rounded`}
                onClick={() => setActive('table')}
              >
                Table
              </button>
            </div>

            {/* <div className='grid grid-cols-4 gap-4 mt-4'>
              <button className='bg-blue-300 p-2' onClick={async () => {
                try {
                  const response = await axios.get('http://localhost:5000/stocks');
                  console.log(response.data);
                } catch (err) {
                  console.log(err);
                }
              }}>GET /stocks</button>
              <button className='bg-blue-300 p-2'>GET /stocks/:id</button>
              <button className='bg-blue-300 p-2'>POST /stocks</button>
              <button className='bg-blue-300 p-2'>GET /stocks</button>
            </div> */}

            <div className='bg-white p-4 mt-4'>
              <p>API Generated Successfully! To use <span className='font-semibold'>{backendRoute}</span> endpoint to make API calls</p>
              <div className='flex gap-4 bg-blue-300/25 border border-blue-300 p-2 mt-2'>
                <div className='bg-blue-400 px-4'>GET</div>
                <p className='font-bold'>/{selectedSheetName}</p>
                <p>Get all data from { selectedSheetName }</p>
              </div>
            </div>

          </div>
        ) : null}
        {active === 'json' && data ? <Json data={data} /> : null}
        {active === 'table' && data ? <Table data={data} /> : null}
      </div>
    </div>
  );
}

export default App;
