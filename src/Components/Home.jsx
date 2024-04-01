import React, { useState, useEffect } from 'react';
import CandleStick from './Charts/CandleStick';
import Line from './Charts/Line';
import HighlightText from './HighlightText';
import Investing from './Investing'

export default function Home() {
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    // Calculate container width dynamically
    const handleResize = () => {
      setContainerWidth(document.getElementById('graph-container').offsetWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial calculation
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="container" className=' relative mt-16 mx-auto flex flex-col items-center justify-between text-white '>
      <div className='text-center text-5xl font-semibold mt-7 text-white'>
      Unlock Your Financial Potential with Our <br />
          <HighlightText text={'Stock Prediction App'}/>
      </div>
      <div className='h-10'></div>
      <Investing/>

      <div className='h-10'></div>

      <div className='grid grid-cols-1 gap-4 w-11/12' id="graph-container">
        <div className='flex flex-col gap-10 bg-richblack-900'>
          
          <Line url='https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv'
          containerWidth={containerWidth} val1='High' val2='Low'/>
          <Line url='https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv'
          containerWidth={containerWidth} val1='Open' val2='Close'/>
          <CandleStick
            url='https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv'
            containerWidth={containerWidth}
          />
        </div>
      </div>
      {/* <JoinUs/> */}
    </div>
  );
}