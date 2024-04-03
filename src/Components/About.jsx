import React from 'react'
import HighlightText from './HighlightText'

import BannerImage1 from '../assets/Images/aboutus1.webp'
import BannerImage2 from '../assets/Images/aboutus2.webp'
import BannerImage3 from '../assets/Images/aboutus3.webp'
import FoundingStory from '../assets/Images/FoundingStory.png'


const About = () => {
  return (
    <>
     <section className='bg-richblack-900'>
        <div
          className='relative mx-auto flex flex-col
  w-11/12 max-w-maxContext justify-between gap-10 text-center text-white'
        >
          <header className='mx-auto py-20 text-4xl font-semibold lg:w-[70%]'>
            Driving Innovation in Stock Market for a{' '}
            <HighlightText text={'Brighter Future'} />
            <p className='mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]'>
              StockNotion is at the fore front of driving innovation in online
              Stock Market. We're passionate about creating a brighter future by
              offering cutting-edge predictions, leveraging emerging technologies,
              and nurturing a vibrant community.
            </p>
          </header>
          <div className='sm:h-80px lg:h-[150px]'></div>
          <div className='absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[50%] grid-cols-3 gap-3 lg:gap-5'>
            <img src={BannerImage1} alt='' />
            <img src={BannerImage2} alt='' />
            <img src={BannerImage3} alt='' />
          </div>
        </div>
      </section>
      <section className='bg-richblack-700'>
      <div className='h-[150px]'></div>
        <div className='mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500'>
          <div className='flex flex-col items-center gap-10 lg:flex-row justify-between'>
            <div className='my-24 flex lg:w-[50%] flex-col gap-10'>
              <h1 className='bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] '>
                Our Founding Story
              </h1>
              <p className='text-base font-medium text-richblack-300 lg:w-[95%]'>
              StockPredict was founded by a team of financial analysts and data scientists who shared a common vision of democratizing access to stock market insights. Our journey began with a deep understanding of the challenges faced by investors in navigating the complex world of finance.
              </p>
              <p className='text-base font-medium text-richblack-300 lg:w-[95%]'>
              We recognized the need for a platform that could analyze vast amounts of data and provide clear, actionable recommendations to investors of all levels. With this vision in mind, we set out to develop StockPredict, a cutting-edge tool designed to empower individuals to make smarter investment decisions.
              </p>
            </div>

            <div>
              <img
                src={FoundingStory}
                alt=''
                className='shadow-[0_0_20px_0] shadow-[#FC6767]'
              />
            </div>
          </div>
          <div className='flex flex-col items-center lg:gap-10 lg:flex-row justify-between'>
            <div className='my-24 flex lg:w-[40%] flex-col gap-10'>
              <h1 className='bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] '>
                Our Vision
              </h1>
              <p className='text-base font-medium text-richblack-300 lg:w-[95%]'>
              At StockPredict, our vision is to revolutionize the way investors approach the stock market. We envision a future where anyone, regardless of their background or expertise, can confidently invest in the stock market and achieve their financial goals.regardless of their background or expertise, can confidently invest their financial goals.
              </p>
            </div>
            <div className='my-24 flex lg:w-[40%] flex-col gap-10'>
              <h1 className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] '>
                Our Mission
              </h1>
              <p className='text-base font-medium text-richblack-300 lg:w-[95%]'>
              Our mission is to provide investors with the tools and insights they need to navigate the stock market with confidence. We are committed to delivering accurate, data-driven predictions and empowering our users to make informed investment decisions that drive long-term financial success.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default About
