import PropTypes from 'prop-types';
import { backendRoute } from '../routes';

const APIInfo = ({ selectedSheetName }) => {

  // const data = [
  //   {
  //     method: "GET",
  //     route: `/${selectedSheetName}`,
  //     desc: `Get all data from ${selectedSheetName}`,
  //     background: "bg-blue-300/25",
  //     border: "border-blue-300"
  //   },
  //   {
  //     method: "GET",
  //     route: `/${selectedSheetName}/:idFieldName/:id`,
  //     desc: "Get single data by id",
  //     background: "bg-blue-300/25",
  //     border: "border-blue-300"
  //   },
  //   {
  //     method: "POST",
  //     route: `/${selectedSheetName}`,
  //     desc: "Create new record. Body format: { values: { your_document_body } }",
  //     background: "bg-green-300/25",
  //     border: "border-green-400"
  //   },
  //   {
  //     method: "PUT",
  //     route: `/${selectedSheetName}/:idFieldName/:id`,
  //     desc: "Update existing record. Body format: { values: { your_document_body } }",
  //     background: "bg-yellow-300/25",
  //     border: "border-yellow-400"
  //   },
  //   {
  //     method: "DELETE",
  //     route: `/${selectedSheetName}/:idFieldName/:id`,
  //     desc: "Delete a record",
  //     background: "bg-red-300/25",
  //     border: "border-red-400"
  //   },
  // ]

  return (
    <div className='lg:w-[50rem] w-full bg-white p-4 rounded mt-4'>
      <p>API Generated Successfully! To use <span className='font-semibold'>{backendRoute}</span> endpoint to make API calls</p>
      <div className='flex flex-col lg:flex-row md:flex-row sm:flex-row gap-4 bg-blue-300/25 border border-blue-300 p-2 mt-2'>
        <div className='flex gap-4 items-center'>
          <div className='bg-blue-400 px-4'>GET</div>
          <p className='font-bold'>/{selectedSheetName}</p>
        </div>
        <p className='text-wrap'>Get all data from { selectedSheetName }</p>
      </div>

      <div className='flex flex-col lg:flex-row md:flex-row sm:flex-row gap-4 bg-blue-300/25 border border-blue-300 p-2 mt-2'>
        <div className='flex gap-4 items-center'>
          <div className='bg-blue-400 px-4'>GET</div>
          <p className='font-bold'>/{selectedSheetName}/:idFieldName/:id</p>
        </div>
        <p className='text-wrap'>Get single data by id</p>
      </div>

      <div className='flex flex-col lg:flex-row md:flex-row sm:flex-row gap-4 bg-green-300/25 border border-green-300 p-2 mt-2'>
        <div className='flex gap-4 items-center'>
          <div className='bg-green-400 px-4'>POST</div>
          <p className='font-bold'>/{selectedSheetName}</p>
        </div>
        <p className='text-wrap'>Create new record. Body format: {`{ values: { your_document_body } }`}</p>
      </div>

      <div className='flex flex-col lg:flex-row md:flex-row sm:flex-row gap-4 bg-yellow-300/25 border border-yellow-300 p-2 mt-2'>
        <div className='flex gap-4 items-center'>
          <div className='bg-yellow-400 px-4'>PUT</div>
          <p className='font-bold'>/{selectedSheetName}/:idFieldName/:id</p>
        </div>
        <p className='text-wrap'>Update existing record. Body format: {`{ values: { your_document_body } }`}</p>
      </div>

      <div className='flex flex-col lg:flex-row md:flex-row sm:flex-row gap-4 bg-red-300/25 border border-red-300 p-2 mt-2'>
        <div className='flex gap-4 items-center'>
          <div className='bg-red-400 px-4'>DELETE</div>
          <p className='font-bold'>/{selectedSheetName}/:idFieldName/:id</p>
        </div>
        <p className='text-wrap'>Delete a record</p>
      </div>
    </div>
  )
}

APIInfo.propTypes = {
  selectedSheetName: PropTypes.string.isRequired,
};

export default APIInfo;
