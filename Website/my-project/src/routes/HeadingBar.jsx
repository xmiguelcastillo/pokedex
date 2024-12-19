import React from 'react'


function HeadingBar() {
  return (

    <div className='flex flex-row h-10 mb-8 w-[500px] font-light rounded-lg shadow shadow-black bg-[#111111] border-[1px] border-[#222224] text-md' >
      <div className='text-white flex justify-center items-center w-1/5'>
        Miguel</div>
      <div className='text-white flex justify-center items-center w-1/5'>University</div>
      <div className=' text-white flex justify-center items-center w-1/5'>Projects</div>
      <div className=' text-white flex justify-center items-center w-1/5'>Resume</div>
      <div className=' text-white flex justify-center items-center w-1/5'>Contact</div>


    </div>
  )

}

export default HeadingBar
