import React, { useEffect } from 'react'
import Plotly from 'plotly.js-dist';

const Line = (props) => {
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const {url}  = props
              console.log(url)
              const response = await fetch(url);
              const data = await response.text();
              // console.log(data)
              // Parse CSV data
              const rows = data.split('\n').map(row => row.split(','));
              // console.log(rows)
              function unpack(rows, key) {
                  const index = rows[0].indexOf(key);
                  return rows.slice(1).map(row => row[index]);
                }

                var Date = unpack(rows,'Date');

                var Open = unpack(rows,'AAPL.Open')
                var High = unpack(rows,'AAPL.High')
                var Low = unpack(rows,'AAPL.Low')
                var Close = unpack(rows,'AAPL.Close')

                var trace1 = {
                    x:Date,
                    y:Open,
                    type:"scatter",
                }
                
                var trace2 = {
                    x:Date,
                    y:Close,
                    type:"scatter",
                }

                const layout = {
                    plot_bgcolor: 'rgba(45, 58, 82, 0.6)', // 60% transparent background
                    paper_bgcolor: 'rgba(45, 58, 82, 0.6)',
                    font: {
                      color: 'white' // Set text color to white for better contrast
                    },
                }
                let lines = [trace1,trace2]
                Plotly.newPlot('Linechart', lines, layout);
              // console.log(unpack(rows,'Date'))
              
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          fetchData();
    },[])
       
  return (
    <div id='Linechart'/>
  )
}

export default Line
