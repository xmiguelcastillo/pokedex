import React from 'react'
function BankHeader2() {
  return (
    <div className='bg-red-500  flex-col w-full h-1/3'  >
      <div className='bg-sky-900 font-normal flex justify-center pl-2 pt-1 w-full h-1/5 '>NetBank Debit</div>
      <div className=' bg-indigo-400 w-full h-4/5 flex justify-center pt-3'>
        <div className='m-3 h-4/5 w-8/12 border-3 rounded-lg flex-row  bg-sky-700 '>
          <div className='bg-red-600 w-4/5 h-full rounded-lg'>
            <div className='bg-lime-700 w-full rounded-lg h-1/6'>NetBank Checking</div>
            <div className='bg-lime-700 w-full h-1/6'>$100.00</div>
            <div className='bg-lime-700 w-full h-2/6 '></div>
            <div className='bg-lime-700 w-full h-1/6'>Ashley Astudillo **/ **</div>
            <div className='bg-lime-700 rounded-lg w-full h-1/6'>**** **** **** 0000</div>



          </div>
        </div>
      </div>


    </div>
  )


}

export default BankHeader2
