import React, { Component } from 'react';
import TradingView from './js/tv.js'
class View extends Component {
  componentDidMount() {
    new TradingView.widget(
        {
        "width": 980,
        "height": 610,
        "symbol": "NASDAQ:AAPL",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "Light",
        "style": "1",
        "locale": "zh_CN",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "tradingview_a98e4"
        }
    );
  }
  render() {
    return (
        <div className="tradingview-widget-container">
            <div id="tradingview_a98e4"></div>
        </div>
    );
  }
}

export default View;