import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import add,{sub,div,mul} from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ul>
      <li>sum of two num is : {add(2,4)}</li>
      <li>sub of two num is : {sub(2,4)}</li>
      <li>div of two num is : {div(89,4)}</li>
      <li>mul of two num is : {mul(2,4)}</li>
    </ul>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
