import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import from app.js and we have to put {} bracket of that is not default export .
import App , {youtuber,Man} from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <p>name :  {youtuber}</p>
    <p><Man/></p>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
