import React, { useEffect, useRef } from "react";
import "./styles/app.css";
import { createChart } from "lightweight-charts";

function App() {
  const chartContainerRef = useRef(); // Create a ref to store the chart container

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: 1200,
      height: 600,
      timeScale: {
        timeVisible: true,
        secondVisible: false,
      },
    });

    const candleSeries = chart.addCandlestickSeries();

    fetch(
      "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=10000"
    )
      .then((res) => res.json())
      .then((data) => {
        
        const cdata = data.map((d) => {
          return {
            time: d[0] / 1000,
            open: parseFloat(d[1]),
            high: parseFloat(d[2]),
            low: parseFloat(d[3]),
            close: parseFloat(d[4]),
          };
        });
        candleSeries.setData(cdata);
        
      })
      .catch((err) => console.log(err));

    return () => {
      chart.remove(); // Cleanup the chart on unmount
    };
  }, []);

  return (
      <div ref={chartContainerRef} style={{ position: "relative", width: "500", height: "00" }} />
  );
}

export default App;
