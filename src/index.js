import React from 'react';
import ReactDOM from 'react-dom';
import './index/index.css';
import App from './index/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// function tick(){
//     ReactDOM.render(<App />, document.getElementById('root'));
// }
// setInterval(tick,1000);
// 每隔一秒重新渲染
registerServiceWorker();
