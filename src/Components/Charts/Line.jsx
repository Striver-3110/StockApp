import React, { useEffect,useRef } from 'react'
import Plotly from 'plotly.js-dist';

const Line = (props) => {
  const lineRef = useRef(null);
  console.log(props.val1 +" "+ props.val2)

  const {url,containerWidth,val1,val2}  = props
    useEffect(()=>{
        const fetchData = async () => {
            try {
              // console.log(url)
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

                var v1 = unpack(rows,`AAPL.${val1}`)
                var v2 = unpack(rows,`AAPL.${val2}`)

                var trace1 = {
                    x:Date,
                    y:v1,
                    type:"scatter",
                }
                
                var trace2 = {
                    x:Date,
                    y:v2,
                    type:"scatter",
                }

                const layout = {
                  height:500,
                  width: containerWidth,
                    plot_bgcolor: 'rgba(45, 58, 82, 0.6)', // 60% transparent background
                    paper_bgcolor: 'rgba(45, 58, 82, 0.4)',
                    font: {
                      color: 'white' // Set text color to white for better contrast
                    },
                }
                let lines = [trace1,trace2]
                Plotly.newPlot(`Linechart${val1}${val2}`, lines, layout);
              
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          fetchData();
    },[url,containerWidth])
       
  return (
    <div id={`Linechart${val1}${val2}`} className='border rounded-lg' ref={lineRef}></div>
  )
}

export default Line
