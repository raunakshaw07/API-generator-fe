import WarningIcon from '../../public/warning.png';

const Info = () => {
  return (
    <div className='lg:w-[50rem] w-full bg-amber-200/[0.2] p-4 border border-amber-200 rounded mt-16'>
      <p>In order to use the spreadsheet as temporary database, share it with the url given below.</p>
      <p className='bg-gray-100 px-4 py-2 rounded border border-gray-300 my-4'>
        sheets@sheets-api-427407.iam.gserviceaccount.com
      </p>
      <p>with `Editor` permission. Failure to do so will throw errors.</p>

      <div className='bg-amber-200 flex gap-4 p-2 mt-4'>
        <img src={WarningIcon} className='h-6 w-6 mt-1' />
        <p>Refreshing the page will reset the routes. If shared with the link specified above, provide the spreadsheet link and proceed.</p>
      </div>
    </div>
  )
}

export default Info