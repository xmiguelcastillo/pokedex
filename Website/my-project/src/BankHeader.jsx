import React from 'react'
function BankHeader() {
  return (
    <div className='bg-red-500  flex-col w-full h-1/3'  >
      <div className='bg-sky-900 w-full h-1/2 flex justify-center pt-3 '>

        <div className='bg-yellow-400 w-32 h-32 border-white border-4 rounded-md'></div>
      </div>
      <div className='flex-col bg-indigo-400 w-full h-1/2 pt-3'>
        <div className='flex justify-center ml-3'>Ashley Astudillo</div>
        <div className='flex justify-center ml-3 text-sm text-[#595a5d]'>ashleyastudillo@gmail.com</div>
      </div>

    </div>
  )


}

export default BankHeader
