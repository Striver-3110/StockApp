import React from 'react'
import CandleStick from './Charts/CandleStick'
import Line from './Charts/Line'

export default function Home () {
  return (
    <div className='relative mt-16 mx-auto flex flex-col items-center justify-between max-w-maxContent text-white w-11/12 '>
      <div class='grid grid-cols-1 gap-4 w-full'>
        <div className='w-full'>
          <CandleStick url='https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv'/>
          <Line url='https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv'/>
        </div>
      </div>
    </div>
  )
}
