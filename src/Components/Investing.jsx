import React from 'react'
import img from '../assets/Images/invest.png'

const Investing = () => {
  return (
    <div className=' w-full bg-richblack-800 flex flex-row items-center'>
      <div className='w-[50%] h-auto ml-8'>
        <img className='w-[80%]' src={img} alt='' />
      </div>
      <div className='w-[40%] p-4 h-auto flex flex-col'>
        <p className='text-lime-400 text-5xl font-bold ml-8'>Investing</p>
        <br />
        <div>
          <p className='text-white text-5xl ml-8 mb-8'>
            Build your portfolio starting with just $1
          </p>
        </div>
        <div className='text-3xl ml-8'>
        Invest in stocks, options, and ETFs at your pace and commission-free.
        </div>
        <div className='flex items-center justify-center mt-8'>
          <button className=' bg-lime-500 rounded-md p-3 hover:bg-lime-600'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Investing
