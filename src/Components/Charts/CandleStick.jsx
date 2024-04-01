import React, { useEffect } from 'react';
import Plotly from 'plotly.js-dist';
// import 'plotly.js-dist/lib/d3';

const CandleStick = (props) => {
  useEffect(() => {
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
        // console.log(unpack(rows,'Date'))
        const trace = {
          x: unpack(rows, 'Date'),
          close: unpack(rows, 'AAPL.Close'),
          high: unpack(rows, 'AAPL.High'),
          low: unpack(rows, 'AAPL.Low'),
          open: unpack(rows, 'AAPL.Open'),

          // Customize colors
          increasing: {line: {color: 'white'}},
          decreasing: {line: {color: 'red'}},

          type: 'candlestick',
          xaxis: 'x',
          yaxis: 'y'
        };
        const layout = {
        //   dragmode: 'zoom',
        //   showlegend: false,
        //   xaxis: {
        //     autorange: true,
        //     title: 'Date',
        //     rangeselector: {
        //       x: 0,
        //       y: 1.2,
        //       xanchor: 'left',
        //       font: {size:8},
            //   buttons: [{
            //     step: 'month',
            //     stepmode: 'backward',
            //     count: 1,
            //     label: '1 month'
            //   }, {
            //     step: 'month',
            //     stepmode: 'backward',
            //     count: 6,
            //     label: '6 months'
            //   }, {
            //     step: 'all',
            //     label: 'All dates'
            //   }]
            // }
        //   },
        //   yaxis: {
        //     autorange: true,
        //   },
          plot_bgcolor: '#161D29',
          paper_bgcolor: '#161D29',
          font: {
            color: 'white' // Set text color to white for better contrast
          },
        //   modebar: {
        //     visible: false
        //   }
        };
        // Create Plotly chart
        Plotly.newPlot('Candle-stick', [trace],layout);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return <div id='Candle-stick' />;
};

export default CandleStick;
