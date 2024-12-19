import React from 'react'
import BankWheel2 from './BankWheel2'
import BankWheel3 from './BankWheel3'
import BankWheel4 from './BankWheel4'
import BankWheel5 from './BankWheel5'

function BankWheel() {
  return (
    <div className='bg-lime-50 text-xl   font-semibold flex-col w-4/6 h-screen'  >


      <BankWheel2 />
      <BankWheel3 />
      <BankWheel4 />
      <BankWheel5 />

    </div>
  )


}

export default BankWheel
