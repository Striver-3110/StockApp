import React from 'react'
import img from '../assets/Images/financeJourney.jpg'

const FinancialJourney = () => {
  return (
    <div className=' w-full bg-richblack-900 flex flex-row items-center mt-8 mb-8'>
     
      <div className='w-[40%] p-4 h-auto flex flex-col'>
        <p className='text-lime-400 text-5xl font-bold ml-8'>Investing basics</p>
        <br />
        <div>
          <p className='text-white text-5xl ml-8 mb-8'>
          The building blocks of your financial journey
          </p>
        </div>
        <div className='text-3xl ml-8 text-white'>
        What you need to know about investing from the get-go.
        </div>
        <div className='flex items-center justify-center mt-8'>
          <button className=' bg-lime-500 rounded-md p-3 hover:bg-lime-600'>
            Learn More
          </button>
        </div>
      </div>
      <div className='w-[50%] h-auto ml-8'>
        <img className='w-[100%]' src={img} alt='' />
      </div>
    </div>
  )
}

export default FinancialJourney
