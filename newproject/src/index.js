import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const a= new Date().toLocaleDateString();
const b= new Date().toLocaleTimeString(); 
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  //<React.Fragment>  It's often used when you need to return adjacent JSX elements without wrapping them in a parent container (like a <div>).
  <React.StrictMode> 
    <App />
    
    <p>{a}</p>
    <p>{b}</p>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
