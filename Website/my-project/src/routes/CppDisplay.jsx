import React from 'react'
import CsharpIcon from '../routes/cppsvg'
function CppDisplay() {
  return (
    <div>
      <div className='text-white flex justify-center mt-3'>C++ Projects</div>
      <div className=' h-64 w-[500px] mt-3 rounded-lg shadow shadow-black bg-[#111111] border-[1px]  border-[#222224]' >


        <div className=' w-full h-3/5 rounded-lg'>
        </div>


        <div className='flex-col  w-full h-1/5'>
          <div className=' text-white flex  justify-center items-center text-sm'>Raytracer</div>






          <div className='flex w-full h-full   justify-center items-center   bg-[#111111]'>


            <div className='bg-[#111111] border-[.05px] rounded-sm border-[#8f909c] flex   text-white w-20 h-5 text-xs   mx-2 '>
              <div className='w-1/3 flex   justify-center text-black items-center h-full '>
                <CsharpIcon />
              </div>
              <div className='w-2/3 flex justify-center  items-center h-full '>C++</div>
            </div>




            <div className='bg-[#111111] border-[.05px] rounded-sm border-[#8f909c] flex   text-white w-20 h-5 text-xs   mx-2 '>
              <div className='w-1/3 flex   justify-center text-black items-center h-full '>
                <CsharpIcon />
              </div>
              <div className='w-2/3 flex justify-center text-[10px] items-center h-full '>Raylib</div>
            </div>




            <div className='bg-[#111111] border-[.05px] rounded-sm border-[#8f909c] flex   text-white w-20 h-5 text-xs   mx-2 '>
              <div className='w-1/3 flex   justify-center text-black items-center h-full '>
                <CsharpIcon />
              </div>
              <div className='w-2/3 flex justify-center  items-center h-full '>Leetcode</div>
            </div>





          </div>






          <div className=' text-[#757a83] flex justify-center items-center text-xs'>Simple Raytracer</div>

        </div>

      </div>
    </div>
  )

}

export default CppDisplay
