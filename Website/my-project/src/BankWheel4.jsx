import React from 'react'

function BankWheel4() {
  return (
    <div className='bg-teal-500  pt-5 text-3xl flex w-full text-s h-24'  >

      <div className='flex mb-3 mt-3 h-10 bg-red-500 w-full'>

        <div className='bg-sky-700 w-1/6 border-2 rounded-md  '></div>
        <div className='bg-green-500 w-5/6'>
          <div className='bg-orange-600 h-1/2 text-sm flex pl-3'>Paid Checking</div>
          <div className='bg-yellow-400 h-1/2 text-sm flex pl-3'>$100</div>

        </div>
      </div>
    </div>
  )


}

export default BankWheel4
