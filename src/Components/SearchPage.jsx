import React, { useState } from 'react'
import searchGlass from '../assets/Images/searchGlass.png'
// import stockPredictionGraph from "../assets/Images/stockPredictionGraph.png"; // Import the stock prediction graph image
import chartImage from '../assets/Images/price.png'
import FinancialJourney from './FinancialJourney'
import axios from 'axios'

const SearchPage = () => {
  const [search, setSearch] = useState('')
  const [symbol,setSymbol] = useState('GOOGL')
  const [predictionData, setPredictionData] = useState(null) // State to store prediction data

  const handleSearch = async e => {
    e.preventDefault();
    // e.preventDefault()
    // try {
      //   const data = symbol;
      //   console.log(data)
      //   const response = await fetch(`http://127.0.0.1:5000/predict`, {
      //     method: "GET", // *GET, POST, PUT, DELETE, etc.
      //     mode: "cors", // no-cors, *cors, same-origin
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     // body: JSON.stringify(data), // body data type must match "Content-Type" header
      //   });
      //   console.log(response);
      //   // setPrediction(response.data.prediction);
      // } catch (error) {
      //   console.error("error in axios req", error);
      //   // Handle errors appropriately, e.g., display an error message to the user
      // }


      
    setPredictionData(null)
    // console.log(search)

    // const res = axios.get("http://localhost:3001/predict")
    // // Mock API call to fetch prediction data (replace with actual API call)
    const predictionData = await fetchPredictionData(search)
    setPredictionData(predictionData)
    setSearch("");
  }

  // Function to fetch prediction data (replace with actual API call)
  const fetchPredictionData = async stockName => {
    // Example of mock data
    const dummyData = {
      AAPL: {
        stockName: 'AAPL',
        openPrice: 150.2,
        highPrice: 155.5,
        lowPrice: 148.8,
        closePrice: 152.3,
        recommendation: 'Buy',
        confidenceLevel: 0.85
      },
      GOOGL: {
        stockName: 'GOOGL',
        openPrice: 2800.1,
        highPrice: 2825.5,
        lowPrice: 2780.8,
        closePrice: 2810.3,
        recommendation: 'Sell',
        confidenceLevel: 0.75
      },
      MSFT: {
        stockName: 'MSFT',
        openPrice: 320.5,
        highPrice: 325.8,
        lowPrice: 318.6,
        closePrice: 322.9,
        recommendation: 'Hold',
        confidenceLevel: 0.8
      }
    }
    return dummyData[stockName] || null
  }

  return (
    <div className='searchPage flex flex-col items-center justify-center h-full mx-12 my-12'>
      <p className='text-4xl font-bold text-white mb-8'>
        Stock Trend Prediction
      </p>
      {/* Search button */}
      <form action='search' className='mb-12'>
        <div className='flex flex-row gap-3 justify-center'>

          <input
            type='text'
            value={search}
            onChange={e => {setSearch(e.target.value);setSymbol(e.target.value)}}
            className='text-white bg-richblack-700 h-8 w-[400px] border border-5 border-black rounded-sm'
            // onChange={(e)=>setSymbole(e.target.value)}
            />
          <button onClick={handleSearch} className='text-white'>
            <img
              src={searchGlass}
              alt='search'
              className='text-white bg-richblack-100 h-8 ml-0 p-1.5 rounded-md'
            />
          </button>
        </div>
      </form>
      {/* Stock Prediction Information */}
      <div className='flex flex-col items-center'>
        {predictionData && (
          <div className='bg-richblack-800 rounded-lg p-6 text-white'>
            <p className='text-xl font-semibold mb-4'>Predicted Stock Trends</p>
            <img src={chartImage} alt='' />
            <p className='text-lg p-3 m-2 bg-richblack-700 rounded border'>
              Stock Name: {predictionData.stockName}
            </p>
            <p
              className={`text-lg p-3 m-2 rounded border ${
                predictionData.recommendation === 'Sell'
                  ? 'bg-red-500'
                  : predictionData.recommendation === 'Hold'
                  ? 'bg-orange-500'
                  : predictionData.recommendation === 'Buy'
                  ? 'bg-green-500'
                  : ''
              }`}
            >
              Recommendation: {predictionData.recommendation}
            </p>
            <p className='text-lg p-3 m-2 bg-righblack-700 rounded border'>
              Open Price: {predictionData.openPrice}
            </p>
            <p className='text-lg p-3 m-2 bg-righblack-700 rounded border'>
              High Price: {predictionData.highPrice}
            </p>
            <p className='text-lg p-3 m-2 bg-righblack-700 rounded border '>
              Low Price: {predictionData.lowPrice}
            </p>
            <p className='text-lg p-3 m-2 bg-righblack-700 rounded border'>
              Close Price: {predictionData.closePrice}
            </p>
           
            <p
              className={`text-lg p-3 m-2 rounded border ${
                predictionData.recommendation === 'Sell'
                  ? 'bg-red-500'
                  : predictionData.recommendation === 'Hold'
                  ? 'bg-orange-500'
                  : predictionData.recommendation === 'Buy'
                  ? 'bg-green-500'
                  : ''
              }`}
            >
              Confidence Level: {predictionData.confidenceLevel}
            </p>
          </div>
        )}
      </div>
      <FinancialJourney />
    </div>
  )
}

export default SearchPage
