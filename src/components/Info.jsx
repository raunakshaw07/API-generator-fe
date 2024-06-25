const Info = () => {
  return (
    <div className='lg:w-[50rem] w-full bg-amber-200/[0.2] p-4 border border-amber-200 rounded mt-16'>
      <p>In order to use the spreadsheet, share it with the url given below.</p>
      <p className='bg-gray-100 px-4 py-2 rounded border border-gray-300 my-4'>
        sheets@sheets-api-427407.iam.gserviceaccount.com
      </p>
      <p>with `Editor` permission. Failure to do so will throw errors.</p>
    </div>
  )
}

export default Info