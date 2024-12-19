import React from 'react'

function BankWheel5() {
  return (
    <div className='bg-lime-700  text-3xl flex w-full h-3/5'  >

      <div className='bg-indigo-400 w-1/6 flex justify-center p-3 h-10'>
        <div className='text-xs'>Transaction</div>
      </div>

      <div className='bg-green-600 w-1/6 flex justify-center p-3 h-10'>
        <div className='text-xs'>Amount</div>
      </div>


      <div className='bg-orange-600 w-1/6 flex justify-center p-3 h-10'>
        <div className='text-xs'>Status</div>
      </div>

      <div className='bg-indigo-900 w-1/6 flex justify-center p-3 h-10'>
        <div className='text-xs'>Date</div>
      </div>

      <div className='bg-yellow-400 w-1/6 flex justify-center p-3 h-10'>
        <div className='text-xs'>Channel</div>
      </div>

      <div className='bg-orange-300 w-1/6 flex justify-center p-3 h-10'>
        <div className='text-xs'>Category</div>
      </div>
    </div>
  )


}

export default BankWheel5
