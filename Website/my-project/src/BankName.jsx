import React from 'react'
import BankHeader from './BankHeader'
import BankHeader2 from './BankHeader2'
import BankHeader3 from './BankHeader3'
function BankName() {
  return (
    <div className='bg-lime-50 text-xl   font-semibold flex-col w-3/6 h-screen'  >

      <BankHeader />
      <BankHeader2 />
      <BankHeader3 />


    </div>
  )


}

export default BankName
