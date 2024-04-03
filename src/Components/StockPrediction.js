import React, { useState, useEffect } from "react";
import axios from "axios";

function StockPrediction() {
  const [symbol, setSymbol] = useState("");
  const [historicalData, setHistoricalData] = useState([]);
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async () => {
    try {
      const data = symbol;
      const response = await fetch(`http://127.0.0.1:3001/predict`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      console.log(response);
      // setPrediction(response.data.prediction);
    } catch (error) {
      console.error("error in axios req", error);
      // Handle errors appropriately, e.g., display an error message to the user
    }
  };

  // ... rest of your component logic and rendering

  return (
    <div>
      <input
        className="border rounded-lg border-black"
        type="text"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />
      {/* ... other input fields for historical data */}
      <button onClick={handleSubmit} className="border rounded-lg border-black">
        Predict
      </button>
      {prediction && <p>Predicted Price: {prediction}</p>}
    </div>
  );
}

export default StockPrediction;
