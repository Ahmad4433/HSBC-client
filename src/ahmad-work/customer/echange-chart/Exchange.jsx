// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';
import styles from './exchange.module.css'
import eximage from '../../assets/exchange.jpg'


function Exchange() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "Apple",
              "AAPL|1D"
            ],
            [
              "Google",
              "GOOGL|1D"
            ],
            [
              "Microsoft",
              "MSFT|1D"
            ]
          ],
          "chartOnly": false,
          "width": 1000,
          "height": 500,
          "locale": "en",
          "colorTheme": "dark",
          "autosize": false,
          "showVolume": true,
          "showMA": true,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "candlesticks",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ],
          "upColor": "#22ab94",
          "downColor": "#f7525f",
          "borderUpColor": "#22ab94",
          "borderDownColor": "#f7525f",
          "wickUpColor": "#22ab94",
          "wickDownColor": "#f7525f"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className={styles.main} >
        <div className={styles.section} >
    
    <div className={styles.grid} >
    <div className={styles.image} >
        <img src={eximage} alt='' className={styles.eximage}  />
    </div>

            <div className={styles.exchange} >
            <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
            </div>
    </div>
        </div>
    </div>
  );
}

export default memo(Exchange);
